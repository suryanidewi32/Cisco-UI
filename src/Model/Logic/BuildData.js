const influx = require("../InfluxDB/configInfluxDB");
const StatusMachine = require("./Status");

function BuildData () {
const value = influx.selectall('APIvalue')
.then(res=>{
    
    let runtime = res[0].last_runtime
    let downtime = res[0].last_downtime
    let idletime = res[0].last_idletime
    const Status = StatusMachine().then(status => {
        if (status ==='Run') {
            runtime = runtime+1
        }
        else if (status ==='Down'){
            downtime = downtime+1
        }
        else{
            idletime = idletime+1
        }
        return {runtime, downtime, idletime, status}
    })
    return Status
})
return value
}
module.exports = BuildData