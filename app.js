//import { dbURI, dbOptions } from './db';
const express = require('express');
const mongoose = require('mongoose');
const { dbURI, dbOptions } = require('./db');
const os = require('os');
const port = process.env.PORT || 3010;
const authRoutes = require('./routes/authRoutes');
const cookieParser = require('cookie-parser');
const { requireAuth, checkUser } = require('./middleware/authMiddleware');
const fileUpload = require('express-fileupload');
const cors = require('cors');
const app = express();
const corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200 
}
// middleware
app.use(express.static('public'));
app.use(express.json());
app.use(cookieParser());
app.use(cors(corsOptions));
app.use(fileUpload());

// view engine
app.set('view engine', 'ejs');

// database connection and start app
mongoose.connect(dbURI, dbOptions)
  .then((result) => {
        console.log('MongoDB is connected');
        app.listen(port)})
  .then(() => {
        let userName = os.userInfo().username;
        console.log(`Hi ${userName}! 
            System is started on ${os.platform()} ${os.hostname()} ${os.release()}. cpu count: ${os.cpus().length}, port: ${port}`);})
  .catch((err) => console.log(err));

// routes
app.get('*', checkUser);
app.get('/', (req, res) => res.render('home'));
app.get('/profile', requireAuth, (req, res) => res.render('profile'));
app.use(authRoutes);


process.on("SIGINT", () => {
    console.log('\ndb is closed'); 
    mongoose.disconnect();
    process.exit();
});
