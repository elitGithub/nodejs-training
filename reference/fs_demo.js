const fs = require('fs');
const path = require('path');

// fs.mkdir(path.join(__dirname, '/test'), {}, err => {if (err) throw err; console.log('folder created')});

// fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), 'Hello world! 2\n',
//         err => {
//     if (err) {
//         throw err;
//     }
//     console.log('file created');
//
//     fs.appendFile(path.join(__dirname, '/test', 'hello.txt'), 'Hello world! 3\n', err => {
//         if (err) {
//             throw err;
//         }
//         console.log('file written to')});
// });

// fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', (err, data) => {
//     if (err) throw err;
//      console.log(data);
// });

fs.rename(path.join(__dirname, '/test', 'hello.txt'), path.join(__dirname, '/test', 'hello2.txt'), err => {
    if (err) throw err;
});