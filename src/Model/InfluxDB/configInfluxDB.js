const Influx = require('influx');

//confifurasi influx
/********************************************************* */
const client = new Influx.InfluxDB({
  database: 'modbuspoll',
  host: process.env.HOST,
  port: 8086,
  username: process.env.UNAME,
  password: process.env.PASSWORD,
})
/********************************************************* */


//insert data modbus//
/********************************************************* */
const modbusString  = require('./prosesInfluxDB');
let InsertModbus = async()=>{
  try {
    const rows = [{
        measurement:'valueModbus',
        fields: {value:modbusString},
      }]
    await client.writePoints(rows);
    // console.log('Data stored successfully!');
  } catch (err) {
    console.log(`Error while processing ${err}`);
  }
};
/********************************************************* */


//update value modbuss//
/********************************************************* */
let InsertValue = async (measurement, value) => {
  downtime = value.downtime 
  runtime = value.runtime 
  idletime = value.idletime
  status = value.status
  try {
    const rows = [{
        measurement,
        fields: {status, runtime, downtime, idletime},
      }];
   
    await client.writePoints(rows);
  } catch (err) {
    console.log(`Error while processing ${err}`);
  }
};
/********************************************************* */


//select last value//
/********************************************************* */
let selectall = async (measurement) => {
  try{
      const results = await client.query(
          `select last(*) from ${measurement}`);
      return results
  } catch(err){
      console.log('err while processing $(err)')
  }
};
/********************************************************* */


//get function//
/********************************************************* */
const influx = {
  selectall,InsertModbus, InsertValue
}
/********************************************************* */

module.exports=influx