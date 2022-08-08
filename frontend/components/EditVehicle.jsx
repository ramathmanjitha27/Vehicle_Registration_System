import React, {useEffect, useState} from "react";
import axios from "axios";
import {TextField} from "@mui/material";
import Button from "@mui/material/Button";
import {useFormik} from "formik";
import {registerSchema} from "../Schemas/RegisterVehicleSchema";
import {Link} from "react-router-dom";

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

    const onSubmit = async (values, actions) => {
        console.log('submit called')
        let ownerName = values.ownerName;
        let address = values.address;
        let NIC = values.NIC;
        let mobile = values.mobile;
        console.log(`Vehicle No : ${vehicleNo}`);

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
                window.location.href = '/vehicles'
            })
            .catch((err)=>{
                alert(err)
                console.log(err)
            })
        await new Promise((resolve) => setTimeout(resolve, 1000));
        actions.resetForm();
    };

    const {values, errors,handleBlur, handleChange, handleSubmit, touched, isSubmitting} = useFormik({

        initialValues : {
            ownerName : '',
            address : '',
            mobile : '',
            NIC : '',
        },
        validationSchema: registerSchema,
        onSubmit
    })

    return(
        <div style={{paddingTop:"20px", paddingBottom: "3rem"}}>
            <div style={{width: "60%", margin: "auto", }}>
                <center><h1>Edit Vehicle Details</h1></center>

                <div
                    style={{
                        borderRadius: "10px",
                        margin: "10px",
                        padding: "",
                        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"

                    }}
                >

                    <form onSubmit={handleSubmit}>

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
                                   readOnly={true}/>
                            <br/><br/>

                            <hr/>

                            <h4>Owner's name</h4>
                            <input fullWidth
                                   value={values.ownerName ||ownerName }
                                   onChange={handleChange}
                                   onBlur={handleBlur}
                                   id={'ownerName'} placeholder={"Type owner's name here..."}
                                   className={errors.ownerName && touched.ownerName ? "input-error" : ""}
                            />
                            {errors.ownerName && touched.ownerName && <p className={'error'}>{errors.ownerName}</p>}

                            <h4>NIC</h4>

                            <input fullWidth
                                   value={values.NIC || NIC}
                                   onChange={handleChange}
                                   onBlur={handleBlur}
                                   id={'NIC'} placeholder={"Type NIC here..."}
                                   className={errors.NIC && touched.NIC ? "input-error" : ""}
                            />
                            {errors.NIC && touched.NIC && <p className={'error'}>{errors.NIC}</p>}
                            <br/><br/>

                            <h4>Address</h4>
                            <input fullWidth
                                   value={address}
                                   onChange={handleChange}
                                   onBlur={handleBlur}
                                   id={'address'} placeholder={"Type address here..."}
                                   className={errors.address && touched.address ? "input-error" : ""}
                            />
                            {errors.address && touched.address && <p className={'error'}>{errors.address}</p>}
                            <br/><br/>

                            <h4>Mobile Number</h4>
                            <input fullWidth
                                   value={mobile}
                                   onChange={handleChange}
                                   onBlur={handleBlur}
                                   id={'mobile'} placeholder={"Type mobile number here..."}
                                   className={errors.mobile && touched.mobile ? "input-error" : ""}
                            />
                            {errors.mobile && touched.mobile && <p className={'error'}>{errors.mobile}</p>}
                            <br/><br/>

                            <Link to={'/vehicles'}>
                            <Button variant="contained" color="info" style={{marginRight: "5px"}}
                                    >Back</Button>
                            </Link>

                            <Button variant="contained" color="info" style={{marginRight: "5px", marginLeft:'530px'}}
                                    type={'submit'}>Edit</Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}