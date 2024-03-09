const express = require('express')
const Workout = require('../models/WorkoutModel')
const router = express.Router()
const {
    getWorkouts,
    getWorkout,
    createWorkout,
    deleteWorkout,
    updateWorkout
} = require('../controllers/workoutController')

//get all workouts
router.get('/', getWorkouts)

//get single workout
router.get('/:id',getWorkout)

//post a workout
router.post('/',createWorkout)

//delete a workout
router.delete('/:id', deleteWorkout)

//update a workout
router.patch('/:id', updateWorkout)


module.exports = router