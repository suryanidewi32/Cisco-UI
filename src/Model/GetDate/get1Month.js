const influx = require("../InfluxDB/configInfluxDB");

function Get1Month(){
    const value = influx.selectall('APIvalue')
    .then(res=>{
        let lwbpRes = res[0]
        let lwbpValue =[]
        lwbpValue.push(lwbpRes)
        return ({lwbpValue})
    })
    return value
}

Get1Month().then(res=>console.log(res))

module.exports = Get1Month
