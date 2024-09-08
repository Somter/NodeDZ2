var evt = require('events');

function FileStram() {
    this._file = "";
}

FileStram.prototype = new evt.EventEmitter();

FileStram.prototype.writeDataToFile = function(path, data) {
    this._file = path;
    this._write(data);
};

FileStram.prototype._write = function(data) {
    console.log('Saving...');
    this.emit('writeData', data); 
    console.log('File was written.');
};

FileStram.prototype.readDataFromFile = function(path, callback) {
    this._file = path;
    if (typeof callback === 'function') {
        this.on('readData', callback);
    }

    this._read();
};

FileStram.prototype._read = function() {
    console.log('Loading...');
    var someDataFromFile = 'Sample data'; 
    this.emit('readData', someDataFromFile); 
    console.log('File was read.');
};

module.exports.Reader = FileStram;
