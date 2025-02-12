import mongoose from 'mongoose'

const phoneSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    number: {
        type: String,
        required: true,
    },
})

phoneSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

export const Phone = mongoose.model('Phone', phoneSchema)