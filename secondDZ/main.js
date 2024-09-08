var fileReader = require('./readFile.js');

var reader = new fileReader.Reader();

reader.writeDataToFile('file.js', function(responce){
    console.log(responce);
});

reader.readDataFromFile('file.js', function(responce){
    console.log(responce);
});
