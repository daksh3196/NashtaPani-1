const model = require("../models/user");
const jwt = require("jsonwebtoken"); // to generate signed token
const expressJwt = require("express-jwt"); // for authorization check
const { errorHandler } = require("../helpers/dbErrorHandler");
const crypto=require('crypto')
const User = model.User
const Token = model.Token
exports.signup = (req, res) => {
     console.log("req.body", req.body);
    const user = new User(req.body);

    User.findOne({ email: user.email }, function (err, user) {
    // Make sure user doesn't already exist
    if (user) return res.status(400).send({ message: 'The email address you have entered is already associated with another account.' });
    // Create and save the user
    user = new User({ name: req.body.name, email: req.body.email, password: req.body.password,phone:req.body.phone });
    user.save(function (err) {
        if (err) { return res.status(500).send({ message: err.message }); }
 
        // Create a verification token for this user
        var token = new Token({ _userId: user._id, token: crypto.randomBytes(16).toString('hex') });
 
        // Save the verification token
        token.save(function (err) {
            if (err) { return res.status(500).send({ msg: err.message }); }
            else{
            user.save((err, user) => {
                if (err) {
                    console.log('error')
                    return res.status(400).json({
                        message: errorHandler(err)
                    });
                }
                else{
                user.salt = undefined;
                user.hashed_password = undefined;
                return res.json({
                    user
                });}
            }); }

            // Send the email
            /*var transporter = nodemailer.createTransport({ service: 'Sendgrid', auth: { user: process.env.SENDGRID_USERNAME, pass: process.env.SENDGRID_PASSWORD } });
            var mailOptions = { from: 'no-reply@yourwebapplication.com', to: user.email, subject: 'Account Verification Token', text: 'Hello,\n\n' + 'Please verify your account by clicking the link: \nhttp:\/\/' + req.headers.host + '\/confirmation\/' + token.token + '.\n' };
            transporter.sendMail(mailOptions, function (err) {
                if (err) { return res.status(500).send({ msg: err.message }); }
                res.status(200).send('A verification email has been sent to ' + user.email + '.');
            });*/
        });
       res.json({message:"User Created~"})
    });
  });

    

    

};

exports.signin = (req, res) => {
    let user =req.header('auth');
    // find the user based on email
    if(user=="undefined"){
    console.log(req.body)
    const { email, password } = req.body;
    User.findOne({ email }, (err, user) => {
        if (err || !user) {
            return res.status(400).json({
                error: "User with that email does not exist. Please signup"
            });
        }
        // if user is found make sure the email and password match
        // create authenticate method in user model
        if (!user.authenticate(password)) {
            return res.status(401).json({
                message: "Email and password dont match"
            });
        }
        if (!user.isVerified) return res.status(401).send({ type: 'not-verified', message: 'Your account has not been verified.' });
        // generate a signed token with user id and secret
        const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
        // persist the token as 't' in cookie with expiry date
        var date = new Date();
        date.setTime(date.getTime() + (120 * 1000));
        res.cookie("to", token, { expire: date });
        // return response with user and token to frontend client
        const { _id, name, email, role, isAdmin } = user;
        return res.json({ token, user: { _id, email, name, role, isAdmin },message:"Signed In", });
    });}
    else{
       return res.json({message:"User already Signed In"}) 
    }
};

exports.signout = (req,res) => {
    
    let user = req.cookies.to;
    if(!user){
        res.json({
        message : "User not signed in!"
    });
    }else{ 
        res.clearCookie("to")
        console.log('OUT')
    res.json({
        message : "User Successfully signed out!"
    });}
}

exports.getAllRecords = (req,res) => {
    User.find().then( res => {
        console.log(res);
        
    })
    res.json({message:"OK"})
}
exports.requireSignin = expressJwt({
    secret : process.env.JWT_SECRET,
    userProperty: "auth"
})

exports.isAuth = (req, res, next) => {
    let user = req.profile && req.auth && req.profile._id == req.auth._id;
    if (!user) {
        res.redirect("/api/signin")
        return res.status(403).json({
            error: "Access denied"
        });
    }
    next();
};

exports.isAdmin = (req, res, next) => {
    if (req.profile.isAdmin === 0) {
        return res.status(403).json({
            error: "Admin resourse! Access denied"
        });
    }
    next();
};
