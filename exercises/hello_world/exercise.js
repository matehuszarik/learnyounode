var exercise = require('workshopper-exercise-hu')()
var filecheck = require('workshopper-exercise-hu/filecheck')
var execute = require('workshopper-exercise-hu/execute')
var comparestdout = require('workshopper-exercise-hu/comparestdout')

// checks that the submission file actually exists
exercise = filecheck(exercise)

// execute the solution and submission in parallel with spawn()
exercise = execute(exercise)

// compare stdout of solution and submission
exercise = comparestdout(exercise)

module.exports = exercise
