const express = require("express")
const tasks = require("./routes/tasks")

const app = express()

// middleware

app.use(express.json())


// routes
app.get('/hello', (request, response) => {
    response.send("Task manager app")
})


app.use("/api/v1/tasks", tasks)


const port = 3333

app.listen(port, console.log(`Server is listening on port ${port}`))