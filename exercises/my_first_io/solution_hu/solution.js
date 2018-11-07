const fs = require('fs')

const contents = fs.readFileSync(process.argv[2])
const lines = contents.toString().split('\n').length - 1
console.log(lines)

// elkerulheted a .toString() hivast ha atadod az 'utf8' opciot
// masodik parameterkent a readFileSync fuggvenynek
//
// fs.readFileSync(process.argv[2], 'utf8').split('\n').length - 1