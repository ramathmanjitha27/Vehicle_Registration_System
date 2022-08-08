import React, {useEffect, useState} from "react";
import {TextField} from "@mui/material";
import Button from "@mui/material/Button";
import {Link} from "react-router-dom";

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
                <center><h1>Register Vehicle</h1></center>

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

                            <h4>Vehicle No</h4>
                            <input fullWidth
                                   value={vehicleNo}
                                   id={'vehicleNo'}
                                   readOnly={true}
                            />
                            <br/><br/>

                            <h4>Vehicle Type</h4>
                            <input fullWidth
                                   value={vehicleType}
                                   readOnly={true}
                            />
                            <br/><br/>

                            <hr/>

                            <h4>Owner's name</h4>
                            <input fullWidth
                                   value={ownerName}
                                   id={'ownerName'}
                                   readOnly={true}
                            />

                            <h4>NIC</h4>
                            <input fullWidth
                                   value={NIC}
                                   id={'NIC'}
                                   readOnly={true}
                            />
                            <br/><br/>

                            <h4>Address</h4>
                            <input fullWidth
                                   value={address}
                                   id={'address'}
                                   readOnly={true}
                            />
                            <br/><br/>

                            <h4>Mobile Number</h4>
                            <input fullWidth
                                   value={mobile}
                                   id={'mobile'}
                                   readOnly={true}
                            />
                            <br/><br/>

                            <Link to={'/vehicles'}>
                                <Button variant="contained" color="info" style={{marginRight: "5px"}}>Back</Button>
                            </Link>


                        </div>

                    </form>

                </div>
            </div>
        </div>
    )
}