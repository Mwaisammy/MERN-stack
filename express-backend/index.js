require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')

//ask for the routes functions
const workoutRoutes = require('./routes/workout')


//creates the express app
const app = express();
const port = process.env.PORT;


//middleware
app.use(express.json())

app.use((req, res, next) =>{
    console.log(req.path , req.method)
    next()                                                     

})

//routes
app.use('/api/workouts',workoutRoutes)



//connect to the database

mongoose.connect(process.env.MONGO_URI)
.then(() =>{

    //listening to requests after connecting to db
    app.listen(port, () => {
        console.log(`Connected to DB & server is running on port ${port}`)
    }) 

})
.catch((error) => {
    console.log("Something went wrong",error)
})


