import React, {useEffect, useState} from "react";
import {TextField} from "@mui/material";

export default function ViewVehicle(){
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


    return(
        <div style={{paddingTop:"20px", paddingBottom: "3rem"}}>
            <div style={{width: "60%", margin: "auto", }}>
                <center><h1>Vehicle Details</h1></center>

                <div
                    style={{
                        borderRadius: "10px",
                        margin: "10px",
                        padding: "",
                        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"

                    }}
                >

            <form>

                <div style={{paddingInline: "3rem", paddingTop: "3rem", paddingBottom: "3rem"}}>

                <h4>Owner's name</h4>
                <TextField fullWidth type={'text'} id={'ownerName'}  value={ownerName} readOnly={true}/>
                <br/><br/>

                <h4>NIC</h4>
                <TextField fullWidth type={'text'} id={'NIC'} value={NIC} readOnly={true}/>
                <br/><br/>

                <h4>Address</h4>
                <TextField fullWidth type={'text'} id={'address'} value={address} readOnly={true} />
                <br/><br/>

                <h4>Mobile Number</h4>
                <TextField fullWidth type={'number'} id={'mobile'} value={mobile} readOnly={true}/>
                <br/><br/>

                <h4>Vehicle No</h4>
                <TextField fullWidth type={'text'} id={'vehicleNo'}  value={vehicleNo} readOnly={true}/>
                <br/><br/>

                <h4>Vehicle Type</h4>
                <TextField fullWidth type={'text'} id={'vehicleType'}  value={vehicleType} readOnly={true}/>
                <br/><br/>
                </div>
            </form>
        </div>
        </div>
        </div>
    )
}