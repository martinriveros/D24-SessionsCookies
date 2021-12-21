const express = require('express');
const app = express()
const path = require('path')
const {config}  = require('./config/index.js');
const serverRoutes = require('./routes/routes.js');
const cors = require ('cors');
const session = require ('express-session');
const MongoStore = require('connect-mongo');


const PORT = config.port

app.use((req, res, next)=>{
  console.log(`${req.method} - ${req.url}`)
  next() // determines the method and the path previous to router
})

// Since version 1.5.0, the cookie-parser middleware no longer needs to be used for this module to work

app.use(session({      // it creates a cookie for the session id (connect.sid -- akjdhf2jkhkj3hljk2) and a session id with the same id in memory
    store: MongoStore.create({
            mongoUrl: process.env.MONGO_DB_URI,
            collectionName:'sessions'
            // ,crypto: {
            //     secret: process.env.SECRET
            // }
            }),
    // cookie:{maxAge: 10000},    // all the settings for the connect.sid cookie created (domain, expires, httpOnly, etc, etc). Some defaults are set though
    secret: process.env.SECRET,
    resave: true,
    saveUninitialized: false
  }));

// settings

app.set('view engine', 'ejs');                        // template views engine
app.set('views', path.join(__dirname, 'views'))     // views path
app.use(express.static(path.join(__dirname, './public'))) /// static css and js files for html

app.use(express.json());                              // interprets json format in post method
app.use(express.urlencoded({extended:true}));         // interprets json format in post method

app.use(cors(`${config.cors}`))
// Routes
serverRoutes(app);

app.listen(PORT,  ()=>{console.log('server on fire, listening dotenv', PORT, config.email_support)});


