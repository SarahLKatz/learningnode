// Hello World:
console.log('HELLO WORLD');

// Baby Steps:
var arr = [].slice.call(process.argv,2);
var sum = arr.reduce((prev,curr) => +prev + +curr);
console.log(sum);

// My First I/O
var fs = require('fs');
var file = fs.readFileSync(process.argv[2]);
console.log(file.toString().split("\n").length-1);

//Filtered LS
var fs = require('fs');
fs.readdir(process.argv[2], function(err,list) {
  list.filter((el) => {
    var extension = '.' + process.argv[3]
    if (el.includes(extension)) {
      console.log(el);
    }
  })
});

// Official Solution - Filtered LS
// var fs = require('fs')
// var path = require('path')

// var folder = process.argv[2]
// var ext = '.' + process.argv[3]

// fs.readdir(folder, function (err, files) {
//   if (err) return console.error(err)
//   files.forEach(function (file) {
//     if (path.extname(file) === ext) {
//       console.log(file)
//     }
//   })
// })