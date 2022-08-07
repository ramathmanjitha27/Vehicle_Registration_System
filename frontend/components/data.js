import axios from "axios";

const handleSubmit= (event)=>{

    const newVehicle = {
        ownerName,
        address,
        NIC,
        mobile,
        vehicleNo,
        vehicleType
    }

    axios.post('http://localhost:8000/api/vehicle/', newVehicle)
        .then(()=>{
            alert(`Succesfully registered the vehicle ${vehicleNo}`)
        })
        .catch((err)=>{
            alert(err)
            console.log(err)
        })
}
