import mongoose from 'mongoose'
import {MONGODB_URI} from './utils/config.js'


export const connectDB = () => {
    mongoose.connect(MONGODB_URI)
    .then(() => {
        console.log('Connected to MongoDB')
    })
    .catch((error) => {
        console.log('Error connecting to MongoDB:', error.message)
    })
}