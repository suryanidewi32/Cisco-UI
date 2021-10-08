const BuilData = require('../Logic/BuildData') 
const influx = require('./configInfluxDB')


function updateData(){
    setInterval(function update() {
    BuilData().then(value=>{influx.InsertValue('APIvalue',value)})
    influx.InsertModbus()
}, 5000)
}
 
module.exports = updateData

