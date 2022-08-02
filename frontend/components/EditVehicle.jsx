import React, {useEffect, useState} from "react";
import axios from "axios";

export default function EditVehicle(){

    const[id, setID] = useState('')
    const[ownerName, setOwnerName] = useState('');
    const [address, setAddress] = useState('')
    const [mobile, setMobile] = useState('')
    const [NIC, setNIC] = useState('')
    const [vehicleNo, setVehicleNo] = useState('')
    const [vehicleType, setVehicleType] = useState('')

    useEffect(()=>{
        setID(localStorage.getItem('id'))
        setOwnerName(localStorage.getItem('ownerName'))
        setAddress(localStorage.getItem('address'))
        setMobile(localStorage.getItem('mobile'))
        setNIC(localStorage.getItem('NIC'))
        setVehicleNo(localStorage.getItem('vehicleNo'))
        setVehicleType(localStorage.getItem('vehicleType'))
    },[])

    const updateSubmit = (event)=>{

        const updateVehicle = {
            ownerName,
            address,
            NIC,
            mobile,
            vehicleNo,
            vehicleType
        }

        axios.put('http://localhost:8000/api/vehicle/update/'+id, updateVehicle)
            .then(()=>{
                alert(`Succesfully updated the vehicle ${vehicleNo}`)
            })
            .catch((err)=>{
                alert(err)
                console.log(err)
            })
    }

    return(
        <div>
            <h2>Update Vehicle Details</h2>

            <form onSubmit={updateSubmit}>

                <lable>Owner's name</lable>
                <input type={'text'} id={'ownerName'} placeholder={"Type owner's name here..."} value={ownerName}
                       onChange={(e)=>(
                           setOwnerName(e.target.value)
                       )}
                />
                <br/><br/>

                <lable>NIC</lable>
                <input type={'text'} id={'NIC'} placeholder={"Type NIC here..."} value={NIC}
                       onChange={(e)=>(
                           setNIC(e.target.value)
                       )}
                />
                <br/><br/>

                <lable>Address</lable>
                <input type={'text'} id={'address'} placeholder={"Type address here..."} value={address}
                       onChange={(e)=>(
                           setAddress(e.target.value)
                       )}
                />
                <br/><br/>

                <lable>Mobile Number</lable>
                <input type={'number'} id={'mobile'} placeholder={"Type mobile number here..."} value={mobile}
                       onChange={(e)=>(
                           setMobile(e.target.value)
                       )}
                />
                <br/><br/>

                <lable>Vehicle No</lable>
                <input type={'text'} id={'vehicleNo'} placeholder={"Type vehicle Number here..."} value={vehicleNo}
                       onChange={(e)=>(
                           setVehicleNo(e.target.value)
                       )}
                />
                <br/><br/>

                <lable>Vehicle Type</lable>
                <input type={'text'} id={'vehicleType'} placeholder={"Type vehicle type here..."} value={vehicleType}
                       onChange={(e)=>(
                           setVehicleType(e.target.value)
                       )}
                />
                <br/><br/>

                <input type={'submit'} value={'update'}/>
            </form>

        </div>
    )
}