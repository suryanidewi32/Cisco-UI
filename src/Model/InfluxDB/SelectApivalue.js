const influx = require("./configInfluxDB");

function allData(){
    const value = influx.selectall('APIvalue')
    .then(res=>{
        let runtime = res[0].last_runtime
        let downtime = res[0].last_downtime
        let idletime = res[0].last_idletime
        let status = res[0].last_status
        return JSON.stringify({runtime,downtime,idletime,status})
    })
    return value
}

allData().then(res=>console.log(res))

module.exports = allData
