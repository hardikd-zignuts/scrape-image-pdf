const fs = require('fs');
const pdf = require('pdf-parse');

let dataBuffer = fs.readFileSync('./Erik Pruger Delivery.pdf');

pdf(dataBuffer).then(function (data) {
    console.log(data.text);
});
