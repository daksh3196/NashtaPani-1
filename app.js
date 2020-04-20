const express=require('express')
require('dotenv').config()
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const expressValidator = require('express-validator');

const mongoURI = "mongodb+srv://madzed23:hasan%40786@nashtapani-y6fpj.mongodb.net/test?retryWrites=true&w=majority"

//import routes
const authRoutes=require('./routes/auth');
const userRoutes=require('./routes/user');
const categoryRoutes=require('./routes/category');

//app
const app = express();
//mongo connect
console.log(process.env.DATABASE)
/*mongoose.connect(
  process.env.DATABASE, {
  	useNewUrlParser: true,
   	useCreateIndex: true
  })*/
  mongoose.connect(
    mongoURI,
    {
      useNewUrlParser: true,
      useMongoClient: true
    }
    )
.then(() => console.log('DB Connected'))
 
mongoose.connection.on('error', err => {
  console.log(`DB connection error: ${err.message}`)
});


// middlewares
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(expressValidator());


//middleware routes
app.use("/api", authRoutes);
app.use("/api", userRoutes);
app.use("/api", categoryRoutes);


const port=process.env.PORT || 8000

app.listen(port, () => {
	console.log(`Server is running on port ${port}`)
})

 if (process.env.NODE_ENV === 'production') {
  // Exprees will serve up production assets
  app.use(express.static('client/build'));

  // Express serve up index.html file if it doesn't recognize route
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

