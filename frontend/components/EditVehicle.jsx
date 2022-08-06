import React, {useEffect, useState} from "react";
import axios from "axios";
import {TextField} from "@mui/material";
import Button from "@mui/material/Button";

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
        <div style={{paddingTop:"20px", paddingBottom: "3rem"}}>
            <div style={{width: "60%", margin: "auto", }}>
                <center><h1>Update Vehicle Details</h1></center>

                <div
                    style={{
                        borderRadius: "10px",
                        margin: "10px",
                        padding: "",
                        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"

                    }}
                >

            <form onSubmit={updateSubmit}>

                <div style={{paddingInline: "3rem", paddingTop: "3rem", paddingBottom: "3rem"}}>

                <h4>Owner's name</h4>
                <TextField fullWidth type={'text'} id={'ownerName'} placeholder={"Type owner's name here..."} value={ownerName}
                       onChange={(e)=>(
                           setOwnerName(e.target.value)
                       )}
                />
                <br/><br/>

                <h4>NIC</h4>
                <TextField fullWidth type={'text'} id={'NIC'} placeholder={"Type NIC here..."} value={NIC}
                       onChange={(e)=>(
                           setNIC(e.target.value)
                       )}
                />
                <br/><br/>

                <h4>Address</h4>
                <TextField fullWidth type={'text'} id={'address'} placeholder={"Type address here..."} value={address}
                       onChange={(e)=>(
                           setAddress(e.target.value)
                       )}
                />
                <br/><br/>

                <h4>Mobile Number</h4>
                <TextField fullWidth type={'number'} id={'mobile'} placeholder={"Type mobile number here..."} value={mobile}
                       onChange={(e)=>(
                           setMobile(e.target.value)
                       )}
                />
                <br/><br/>

                <h4>Vehicle No</h4>
                <TextField fullWidth type={'text'} id={'vehicleNo'} placeholder={"Type vehicle Number here..."} value={vehicleNo}
                       onChange={(e)=>(
                           setVehicleNo(e.target.value)
                       )}
                />
                <br/><br/>

                <h4>Vehicle Type</h4>
                <TextField fullWidth type={'text'} id={'vehicleType'} placeholder={"Type vehicle type here..."} value={vehicleType}
                       onChange={(e)=>(
                           setVehicleType(e.target.value)
                       )}
                />
                <br/><br/>

                    <Button variant="contained" color="info" style={{marginRight: "5px"}} type={'submit'}>Update</Button>
                </div>
            </form>

        </div>
        </div>
        </div>
    )
}