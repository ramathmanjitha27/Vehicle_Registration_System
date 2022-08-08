const mongoose = require('mongoose')
const Schema = mongoose.Schema;
//vehicle model
const vehicleSchema = new Schema({
    ownerName : {
        type : String,
        required : true
    },
    address : {
        type : String,
        required : true
    },
    mobile : {
        type : Number,
        required : true
    },
    NIC : {
        type : String,
        required : true
    },
    vehicleNo : {
        type : String,
        required : true
    },
    vehicleType : {
        type : String,
        required : true
    }

})

const Vehicle = mongoose.model('vehicle', vehicleSchema);
module.exports = Vehicle;