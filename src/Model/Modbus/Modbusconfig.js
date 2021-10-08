var myVar = setInterval(function(){ Number() }, 1000);

function modbus() {
    var data = Math.floor(Math.random() * 100) + 1;
    return data;
}

module.exports = modbus;