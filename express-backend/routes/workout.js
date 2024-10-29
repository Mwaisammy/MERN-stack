const express = require('express');
const {
    createWorkout,
    getWorkouts,
    getWorkout,
    deleteWorkout,
    updateWorkout
} = require('../controllers/workoutControllers');


const router = express.Router();

// GET all workouts
router.get('/', getWorkouts); 

//POST a workout
router.post('/', createWorkout); 

// GET a single workout
router.get('/:id', getWorkout);

// DELETE a workout
router.delete('/:id',deleteWorkout);

// UPDATE a single workout
router.patch('/:id', updateWorkout);

module.exports = router;







