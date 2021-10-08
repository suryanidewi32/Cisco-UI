const express = require('express')
const app = express()
const config = require('../Config/index')
const port = config.port


app.listen(port, () => console.log('Server runs on port',port))

/*********************************************************************/
const cors = require('cors')
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:false}))
/*********************************************************************/
const updateData = require('../InfluxDB/InsertNUpdate')
const allData = require('../InfluxDB/SelectApivalue')
const Get1Month = require('../GetDate/get1Month')
/*********************************************************************/

// Data Processing for select last APIvalue;
app.get('/', async(req, res) => {
    const dataModbusSerial = await allData()
    res.status(200).json(dataModbusSerial)
})


// Data Processing for update APIvalue;
updateData()

// Data Processing for get date

app.get('/month', async(req, res) => {
     const getMonth= await Get1Month()
     res.status(200).json(getMonth)
})