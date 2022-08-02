const Vehicle = require('../models/vehicleModel')

module.exports.add_Vehicle = async (req, res)=>{
    const {ownerName, address, mobile, NIC, vehicleNo, vehicleType} = req.body;

    const newVehicle = await new Vehicle({
        ownerName,
        address,
        mobile,
        NIC,
        vehicleNo,
        vehicleType
    })

    newVehicle.save()
        .then(()=>{
            res.json('Vehicle registered')
        })
        .catch((err)=>{
            console.log(err)
        })
}

module.exports.get_Vehicles = async (req, res)=>{
    const getVehicles = await Vehicle.find();

    try {
        if (getVehicles) {
            return res.json(getVehicles)
        } else
            console.log('Error with getting vehicles')
    }
    catch (err){
        console.log(err)
        res.status(500).send("Something get wrong when getting vehicles")
    }
}

module.exports.get_vehicle = async (req, res)=>{
    let id = req.params.id;

    const getVehicle = await Vehicle.findById(id)

    try {
        if (getVehicle) {
            return res.json(getVehicle)
        } else
            console.log('Error with getting vehicle')
    }
    catch (err){
        console.log(err)
        res.status(500).send("Something get wrong when getting vehicle")
    }
}

module.exports.delete_vehicle = (req, res) =>{
    let id = req.body.id;

    try {
        Vehicle.findByIdAndDelete({_id: id})
            .then(() => {
                res.json('Vehicle deleted')
            })
            .catch((err) => {
                console.log(err)
            })
    }
    catch (err){
        console.log(err)
    }
}

module.exports.update_Vehicle = async (req, res) =>{
    const {ownerName, address, mobile, NIC, vehicleNo, vehicleType} = req.body;
    let id = req.params.id;

    const updateVehicle =  {
        ownerName,
        address,
        mobile,
        NIC,
        vehicleNo,
        vehicleType
    }

    Vehicle.findByIdAndUpdate(id, updateVehicle)
        .then(()=>{
            res.json('Vehicle Updated')
        })
        .catch((err)=>{
            console.log(err)
        })

}