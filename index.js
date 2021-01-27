const express = require('express')
const config = require('config')
const cookieParser = require('cookie-parser');
const cors = require('cors')
const mongoose = require('mongoose')
const session = require('express-session')

const MongoStore = require('connect-mongo')(session);

const app = express()

const mongoUri = config.get('mongoUri');

//Middleware
app.use(express.json({ extended: true }))

app.use(cors({
    origin: true,
    credentials: true,
}))

app.use(cookieParser());

app.use(session({
    name: 'sid',
    resave: false,
    saveUninitialized: false,
    secret: config.get('sessionKey'),
    cookie: {
        maxAge: 60 * 60 * 24 * 100,
        sameSite: true,
        secure: false
    },
    store: new MongoStore({
        mongooseConnection: mongoose.connection,
        collection: 'sessions'
    }),


}))

app.use('/api/auth', require('./routes/auth.routes'))

const PORT = config.get('port') || 5000


async function start() {
    try {
        await mongoose.connect(mongoUri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        })
        app.listen(PORT, () => console.log(`App has been started on port ${PORT}...`))
    } catch (e) {
        console.log('Server Error', e.message)
        process.exit(1)
    }
}

start();
