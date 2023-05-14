const mongoose = require('mongoose')

// function to create Schema
const Schema = mongoose.Schema

// Schema defines the structure 
const workoutSchema = new Schema({
    // types and required thingies
    title: {
        type: String,
        required: true
    },
    reps: {
        type: Number,
        required: true
    },
    load: {
        type: Number,
        required: true
    }
}, { timestamps: true })

// Model applies Schema to interact 
module.exports = mongoose.model('Workout', workoutSchema)