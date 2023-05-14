const Workout = require('../models/workoutModel')
const mongoose = require('mongoose')

// GET all workouts
const getWorkouts = async (req, res) => {
    const workouts = await Workout.find({}).sort({createdAt: -1})

    res.status(200).json({workouts})
}

// GET single workout
const getWorkout = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such Workout'})
    }

    const workout = await Workout.findById(id)

    if (!workout) {
        // if not found we need to return else code continues no matter what 
        return res.status(404).json({error: 'No such workout'})
    }

    res.status(200).json(workout)
} 


// CREATE new workout
const createWorkout = async (req, res) => {
    const { title, load, reps } = req.body
    
    // add doc to db
    try{
        const workout = await Workout.create({ title, load, reps })
        res.status(269).json(workout)
    } catch (error) {
        res.status(404).json({ error: error.message })
    }
}

// DELETE a workout
const deleteWorkout = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such Workout'})
    }

    const workout = await Workout.findOneAndDelete({_id: id})

    if (!workout) {
        // if not found we need to return else code continues no matter what 
        return res.status(404).json({error: 'No such workout'})
    }

    res.status(200).json(workout)
}


// UPDATE a workout
const updateWorkout = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such Workout'})
    }

    const workout = await Workout.findOneAndUpdate({_id: id}, {
        ...req.body
    })
    
    if (!workout) {
        // if not found we need to return else code continues no matter what 
        return res.status(404).json({error: 'No such workout'})
    }

    res.status(200).json(workout)
}

module.exports = {
    createWorkout,
    getWorkout,
    getWorkouts,
    deleteWorkout,
    updateWorkout
}