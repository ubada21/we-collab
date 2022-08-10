
const express = require('express');
const dotenv = require('dotenv').config()
const colors = require('colors')
const {errorHandler} = require('./middleware/errorMiddleware')
const connectDB = require('./config/db');
const PORT = process.env.PORT || 4000;
var cors = require('cors')



connectDB()
const app = express();

app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use('/api/tasks', require('./routes/taskRoutes'))
app.use('/api/progresstasks', require('./routes/IPTaskRoutes'))
app.use('/api/completedtasks', require('./routes/completedTaskRoutes'))
app.use('/api/canvas', require('./routes/canvasRoutes'))
app.use(cors)
app.use(errorHandler)

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
})



