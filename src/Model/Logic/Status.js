const influx = require("../InfluxDB/configInfluxDB");

function StatusMachine(){
const Value = influx.selectall('valueModbus','value')
.then(res=>{
  const lastValue = res[0].last_value
  if (lastValue < 110) {
    return "Down"
   } else {
     return "Run";
   }  
})
return Value;
}
module.exports = StatusMachine