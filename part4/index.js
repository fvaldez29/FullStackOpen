import express from 'express';
import cors from 'cors'
import morgan from 'morgan'
import dotenv from 'dotenv'
import { connectDB } from './mongodb.js'
import { PORT } from './utils/config.js';
dotenv.config()

const app = express()

app.use(cors())
app.use(morgan('dev'))
app.use(express.json())


//import connection to MongoDB
connectDB()


app.get('/', (req, res) => {
    res.send('Hello world')
})




app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})