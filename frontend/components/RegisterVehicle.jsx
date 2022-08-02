import React, {useEffect, useState} from "react";
import axios from "axios";

export default function RegisterVehicle(){

    const[ownerName, setOwnerName] = useState('');
    const [address, setAddress] = useState('')
    const [mobile, setMobile] = useState('')
    const [NIC, setNIC] = useState('')
    const [vehicleNo, setVehicleNo] = useState('')
    const [vehicleType, setVehicleType] = useState('')


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

    return(
        <div>
            <h2>Register Vehicle</h2>

            <form onSubmit={handleSubmit}>

                <lable>Owner's name</lable>
                <input type={'text'} id={'ownerName'} placeholder={"Type owner's name here..."}
                onChange={(e)=>(
                    setOwnerName(e.target.value)
                )}
                />
                <br/><br/>

                <lable>NIC</lable>
                <input type={'text'} id={'NIC'} placeholder={"Type NIC here..."}
                       onChange={(e)=>(
                           setNIC(e.target.value)
                       )}
                />
                <br/><br/>

                <lable>Address</lable>
                <input type={'text'} id={'address'} placeholder={"Type address here..."}
                       onChange={(e)=>(
                           setAddress(e.target.value)
                       )}
                />
                <br/><br/>

                <lable>Mobile Number</lable>
                <input type={'number'} id={'mobile'} placeholder={"Type mobile number here..."}
                       onChange={(e)=>(
                           setMobile(e.target.value)
                       )}
                />
                <br/><br/>

                <lable>Vehicle No</lable>
                <input type={'text'} id={'vehicleNo'} placeholder={"Type vehicle Number here..."}
                       onChange={(e)=>(
                           setVehicleNo(e.target.value)
                       )}
                />
                <br/><br/>

                <lable>Vehicle Type</lable>
                <input type={'text'} id={'vehicleType'} placeholder={"Type vehicle type here..."}
                       onChange={(e)=>(
                           setVehicleType(e.target.value)
                       )}
                />
                <br/><br/>

                <input type={'submit'}/>
            </form>
        </div>
    )
}