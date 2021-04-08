const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const sportRouter = require('./routes/sport-route')
const testRouter = require('./routes/test-route')
const authRouter = require('./routes/auth-routes')
const userRouter = require('./routes/user-routes')
const teamRouter = require('./routes/team-router')
const coachRouter = require('./routes/coach-router')
const invitationRouter = require('./routes/invitation-router')


const app = express()
const apiPort = 5000



const db = require('./db/key').MongoURI;

mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
    .then(() => console.log("Successfully connected to MongoDB"))
    .catch(err => console.log(err));

app.use(cookieParser());

app.use(bodyParser.urlencoded({extended:true}))
app.use(cors())
app.use(bodyParser.json())



app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use('/api', authRouter)
app.use('/sports', sportRouter)
app.use('/test', testRouter)
app.use('/user', userRouter)
app.use('/coach', coachRouter)
app.use('/team', teamRouter)
app.use('/invitation', invitationRouter)

app.listen(apiPort, () => console.log(`Listening on port: ${apiPort}`))