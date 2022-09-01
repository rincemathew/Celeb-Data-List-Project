//pure node js to run 'node main.js'
var fs = require('fs');


let newData;


// To create and write to the file
// data = {
//     "name": "abc",
//     "age": 22,
//     "city": "bfrdgdf"
//   }
// fs.writeFileSync('sample.json', JSON.stringify([data], null, 2));


// Read from file
const fileData = JSON.parse(fs.readFileSync('sample.json'))
// console.log(fileData)


// write it to array
newData = {
    "name": "chicken",
    "age": 10,
    "city": "fucof"
  }
fileData.push(newData)
console.log(fileData)



fs.writeFileSync('sample.json', JSON.stringify(fileData, null, 2));
