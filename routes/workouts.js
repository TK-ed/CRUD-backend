const express = require('express')
const { 
    createWorkout, 
    getWorkout,
    getWorkouts,
    deleteWorkout,
    updateWorkout
} = require('../controllers/workoutController')

const router = express.Router()


// GET all workouts
router.get('/', getWorkouts)

// POST a new workout
router.post('/', createWorkout) 

// GET a single workout
router.get('/:id', getWorkout)

// DELETE a workout
router.delete('/:id', deleteWorkout) 

// UPDATE a workout
router.patch('/:id', updateWorkout)

// exporting
module.exports = router