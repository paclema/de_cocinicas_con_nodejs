var fs = require('fs'),
    readline = require('readline');

var rd = readline.createInterface({
    input: fs.createReadStream('comida.txt'),
    output: process.stdout,
    terminal: false
});

rd.on('line', function(line) {
    console.log(line + " me mola");
});