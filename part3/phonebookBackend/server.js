import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import 'dotenv/config'
import { connectDB } from './mongo.js'
import { Person } from './models/phoneSchema.js'
import errorHandler from './middleware/errorHandler.js'
import unkwonEndpoint from './middleware/unknownEndpoint.js'

const app = express()

// Configuración inicial
app.disable('x-powered-by')
app.use(express.json())
app.use(morgan('dev'))
app.use(cors())

// Conexión a la base de datos
connectDB()

// Rutas
app.get('/api/persons', async (req, res, next) => {
    try {
        const persons = await Person.find()
        res.status(200).json(persons)
    } catch (error) {
        next(error)
    }
})

app.get('/info', async (req, res, next) => {
    try {
        const count = await Person.countDocuments()
        const date = new Date()
        res.send(`<p>Phonebook has info for ${count} people</p><p>${date}</p>`)
    } catch (error) {
        next(error)
    }
})

app.get('/api/persons/:id', async (req, res, next) => {
    try {
        const { id } = req.params
        const person = await Person.findById(id)
        if (!person) {
            return res.status(404).json({ error: 'Person not found' })
        }
        res.status(200).json(person)
    } catch (error) {
        next(error)
    }
})

app.post('/api/persons', async (req, res, next) => {
    try {
        const { name, number } = req.body
        if (!name || !number) {
            return res.status(400).json({ error: 'Name or number missing' })
        }

        const personExists = await Person.findOne({ name })
        if (personExists) {
            return res.status(400).json({ error: 'Name must be unique' })
        }

        const person = new Person({ name, number })
        await person.save()
        res.status(201).json(person)
    } catch (error) {
        next(error)
    }
})

app.delete('/api/persons/:id', async (req, res, next) => {
    try {
        const { id } = req.params
        await Person.findByIdAndDelete(id)
        res.status(204).end()
    } catch (error) {
        next(error)
    }
})


app.use(unkwonEndpoint)


app.use(errorHandler)

const PORT = process.env.PORT || 1234
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
