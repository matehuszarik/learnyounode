var fs = require('fs')
var path = require('path')
var os = require('os')
var rimraf = require('rimraf')
var exercise = require('workshopper-exercise-hu')()
var filecheck = require('workshopper-exercise-hu/filecheck')
var execute = require('workshopper-exercise-hu/execute')
var comparestdout = require('workshopper-exercise-hu/comparestdout')
var wrappedexec = require('workshopper-wrappedexec')
var boganipsum = require('boganipsum')

var testFile = path.join(os.tmpdir(), '_learnyounode_' + process.pid + '.txt')

// checks that the submission file actually exists
exercise = filecheck(exercise)

// execute the solution and submission in parallel with spawn()
exercise = execute(exercise)

// compare stdout of solution and submission
exercise = comparestdout(exercise)

// wrap up the child process in a phantom wrapper that can
// mess with the global environment and inspect execution
exercise = wrappedexec(exercise)

// a module we want run just prior to the submission in the
// child process
exercise.wrapModule(require.resolve('./wrap'))

// set up the data file to be passed to the submission
exercise.addSetup(function (mode, callback) {
  // mode == 'run' || 'verify'

  var lines = Math.ceil(Math.random() * 50)
  var txt = boganipsum({ paragraphs: lines })

  // supply the file as an arg to the 'execute' processor for both
  // solution and submission spawn()
  // using unshift here because wrappedexec needs to use additional
  // args to do its magic
  this.submissionArgs.unshift(testFile)
  this.solutionArgs.unshift(testFile)

  // file with random text
  fs.writeFile(testFile, txt, 'utf8', callback)
})

// add a processor only for 'verify' calls
exercise.addVerifyProcessor(function (callback) {
  var usedSync = false
  var usedAsync = false

  Object.keys(exercise.wrapData.fsCalls || {}).forEach(function (m) {
    if (/Sync$/.test(m)) {
      usedSync = true
      this.emit('pass', this.__('pass.sync', {method: 'fs.' + m + '()'}))
    } else {
      usedAsync = true
      this.emit('fail', this.__('fail.async', {method: 'fs.' + m + '()'}))
    }
  }.bind(this))

  callback(null, !usedAsync && usedSync)
})

// cleanup for both run and verify
exercise.addCleanup(function (mode, passed, callback) {
  // mode == 'run' || 'verify'

  rimraf(testFile, callback)
})

module.exports = exercise
