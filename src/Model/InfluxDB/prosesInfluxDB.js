const modbus = require('../Modbus/Modbusconfig')
const modbusString = modbus()
const stringDataModbus = JSON.stringify(modbusString)

module.exports = stringDataModbus;
