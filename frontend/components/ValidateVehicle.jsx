import React, {useState} from 'react'
import axios from "axios";
import {TextField} from "@mui/material";
import Button from "@mui/material/Button";

export default function ValidateVehicle(){
    const [vehicleNo, setVehicleNo] = useState('')
    const [vehicleType, setVehicleType] = useState('')
    const [noSpacesVehiNo, setNoSpacesVehiNo] = useState('')

    const handleValidate = (event)=>{

        let removeSpacesVehiNo = vehicleNo.replace(/ /g,'');
        setNoSpacesVehiNo(removeSpacesVehiNo)

        axios.get('http://localhost:8000/api/vehicle/validate/'+removeSpacesVehiNo)
            .then((res)=>{
                setVehicleType(res.data)
            })
            .catch((err)=>{
                alert(err.message)
            })
    }

    return(
        <div style={{paddingTop:"20px", paddingBottom: "3rem"}}>
            <div style={{width: "60%", margin: "auto", }}>

                <center><u><h2>Validate Vehicle Type</h2></u></center>
                <div
                    style={{
                        borderRadius: "10px",
                        margin: "10px",
                        padding: "",
                        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
                    }}
                >
            <div style={{paddingInline: "3rem", paddingTop: "3rem", paddingBottom: "3rem"}}>

            <TextField fullWidth type={'text'} id={'vehiNo'} placeholder = 'Type vehicle number here...'
            onChange={(e)=>{
                setVehicleNo(e.target.value)
            }}
            />

            <center>
            <Button variant="contained" color="info" style={{marginRight: "5px", marginTop:'2rem', marginBottom:'1rem'}}
                    onClick={handleValidate}>Validate</Button>
            </center>

                <h3><i>Vehicle Number</i> : {noSpacesVehiNo}</h3>
                <h3><i>Vehicle Type</i>   : {vehicleType}</h3>

            </div>
        </div>
        </div>
        </div>
    )
}