const express = require("express")
const tasks = require("./routes/tasks")
const connectDB = require('./db/connect')
require('dotenv').config()

const app = express()

// middleware

app.use(express.json())


// routes
app.get('/hello', (request, response) => {
    response.send("Task manager app")
})


app.use("/api/v1/tasks", tasks)


const port = 3333

async function start(){
    try {
        await connectDB(process.env.MONGODB_URI)
        app.listen(port, console.log(`Server is listening on port ${port}`))
    } catch (error) {
        console.log(error)
    }
}

start()