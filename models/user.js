const mongoose=require('mongoose');
const crypto=require('crypto')
const uuidv1=require('uuid/v1')

const userSchema = new mongoose.Schema({
	name: {
		type: String,
		trim: true, //any space in the beginning or end will be trimmed out
		required: true,
		maxlength: 32
	},
	email: {
		type: String,
		trim: true,
		required: true,
		unique: true
	},
	phone:
	{
		type: String,
		required:true,
		unique:true
	},
	hashed_password: {
		type: String,
		required: true
	},
	about : {
		type: String,
		trim: true
	},
	salt: String,
	role: {
		type: Number,
		default: 0
	},
	isVerified: {
		type: Boolean,
		trim: true,
		default: true
	},
	isAdmin: {
		type: Boolean,
		trim: true,
		default: false
	},
	history: {
		type: Array,
		default: []
	},
	passwordResetToken: String,
  	passwordResetExpires: Date
},
{timestamps: true}
);
	
const tokenSchema = new mongoose.Schema({
    _userId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
    token: { type: String, required: true },
    createdAt: { type: Date, required: true, default: Date.now, expires: 43200 }
});

userSchema
    .virtual("password")
    .set(function(password) {
        this._password = password;
        this.salt = uuidv1();
        this.hashed_password = this.encryptPassword(password);
    })
    .get(function() {
        return this._password;
    });

userSchema.methods = {
	authenticate: function(plainText) {
        return this.encryptPassword(plainText) === this.hashed_password;
    },
    encryptPassword: function(password) {
        if (!password) return "";
        try {
            return crypto
                .createHmac("sha1", this.salt)
                .update(password)
                .digest("hex");
        } catch (err) {
            return "";
        }
    }
};

const User = mongoose.model("User", userSchema)
const Token = mongoose.model("Token", tokenSchema)
module.exports = {User,Token}