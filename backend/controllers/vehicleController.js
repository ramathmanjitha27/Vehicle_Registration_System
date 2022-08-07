const Vehicle = require('../models/vehicleModel')

//determines the type of entered vehicle Number
module.exports.validate_Vehicle = async (req, res)=> {
    const vehicleNo = req.params.id;

    let vintageNoPatternRegex = /^([0-9]{1,3}SRI[0-9]{4})$/
    let oldNoPatternRegex = /^([0-9]{1,3}-[0-9]{4})$/
    let modernNoPatternRegexV1 = /^([A-Z]{2}[A-Z]{1,2}-[0-9]{4})$/
    const modernNoPatternRegexV2 = /^([A-Z]{2,3}-\[0-9]{4})$/

    console.log(vehicleNo)

    if(vehicleNo.match(oldNoPatternRegex)){
        console.log('Old Vehicle')
        return res.json('Old Vehicle')
    }
    else if(vehicleNo.match(vintageNoPatternRegex)){
        console.log('Vintage Vehicle')
        return res.json('Vintage Vehicle')
    }
    else if(vehicleNo.match(modernNoPatternRegexV1 ||modernNoPatternRegexV2 )){
        console.log('Modern Vehicle')
        return res.json('Modern Vehicle')
    }
    else {
        console.log('Incorrect Input')
        return res.json('Incorrect Input')
    }
}

//Register Vehicle
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

//Retrieve all registered vehicles
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

//Retrieve only one vehicle details
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

//delete vehicle by ID
module.exports.delete_vehicle = (req, res) =>{
    let id = req.params.id;

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

//update the vehicle details
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