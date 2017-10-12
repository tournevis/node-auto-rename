const fs = require('fs')
const exec = require('child_process').exec;
const path = require('path');

if(!process.argv[2]) return
const workPath = path.resolve(process.argv[2])

if(!workPath) return
console.log('Working on : ', workPath)

fs.readdirSync(workPath).forEach(file => {
  var oldFileName = file.replace(/\s+/g,"\\ ")
  console.log(oldFileName)
  var newFileName = file.replace(/[_-]/gi,"")

  newFileName = newFileName.replace(/\s+|[ -]/gi, "_")
  newFileName = newFileName.toLowerCase()
  newFileName = newFileName.replace(/[^a-zA-Z_.0-9]+/, '')

  exec(`mv ${workPath}/${oldFileName} ${workPath}/${newFileName}`, (err, stdout, stderr) => {
      if (err) {
        console.error(`exec error: ${err}`);
        return;
      }
    })

})
