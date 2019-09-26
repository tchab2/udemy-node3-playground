const fs = require('fs');

const book = {
    title: 'Ego is the Enemy',
    author: 'Jhon'
}

const bookJSON = JSON.stringify(book);
console.log(bookJSON);

const bookData = JSON.parse(bookJSON);
console.log(bookData.author);

fs.writeFileSync('1-json.json', bookJSON);

const dataBuffer = fs.readFileSync('1-json.json');
const dataJSON = dataBuffer.toString();
const data = JSON.parse(dataJSON);
console.log(data);

const dataBuffer = fs.readFileSync('1-json.json');
let dataJSON = dataBuffer.toString();
const data = JSON.parse(dataJSON);
data.name = "Sylvain";

dataJSON = JSON.stringify(data);
fs.writeFileSync('1-json.json', dataJSON);