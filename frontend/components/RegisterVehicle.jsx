import React, {useEffect, useState} from "react";
import axios from "axios";
import {TextField} from "@mui/material";
import Button from "@mui/material/Button";
import {useFormik} from "formik";
import {basicSchema} from "../Schemas/VehicleSchema";
import {registerSchema} from "../Schemas/RegisterVehicleSchema";

export default function RegisterVehicle(){

    const[ownerName, setOwnerName] = useState('');
    const [address, setAddress] = useState('')
    const [mobile, setMobile] = useState('')
    const [NIC, setNIC] = useState('')
    const [vehicleNo, setVehicleNo] = useState('')
    const [vehicleType, setVehicleType] = useState('')

    const onSubmit = async (values, actions) => {
        let vehicleNumber = values.vehicleNo;
        console.log(`Vehicle No : ${vehicleNumber}`);

        axios.get('http://localhost:8001/api/vehicle/validate/'+removeSpacesVehiNo)
            .then((res)=>{
                setVehicleType(res.data)
            })
            .catch((err)=>{
                alert(err.message)
            })

        await new Promise((resolve) => setTimeout(resolve, 1000));
        actions.resetForm();
    };


    const {values, errors,handleBlur, handleChange, handleSubmit, touched, isSubmitting} = useFormik({

        initialValues : {
            vehicleNo : '',
            ownerName : '',
            address : '',
            mobile : '',
            NIC : '',
            vehicleType : ''

        },
        validationSchema: registerSchema,
        onSubmit
    })

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

                    <form onSubmit={handleSubmit}>

                        <div style={{paddingInline: "3rem", paddingTop: "3rem", paddingBottom: "3rem"}}>

                            <h4>Owner's name</h4>
                            <input fullWidth
                                   value={values.ownerName}
                                   onChange={handleChange}
                                   onBlur={handleBlur}
                                   id={'ownerName'} placeholder={"Type owner's name here..."}
                                   className={errors.ownerName && touched.ownerName ? "input-error" : ""}
                            />
                            {errors.ownerName && touched.ownerName && <p className={'error'}>{errors.ownerName}</p>}


                            <h4>NIC</h4>

                            <input fullWidth
                                   value={values.NIC}
                                   onChange={handleChange}
                                   onBlur={handleBlur}
                                   id={'NIC'} placeholder={"Type NIC here..."}
                                   className={errors.NIC && touched.NIC ? "input-error" : ""}
                            />
                            {errors.NIC && touched.NIC && <p className={'error'}>{errors.NIC}</p>}
                            <br/><br/>

                            <h4>Address</h4>
                            <input fullWidth
                                   value={values.address}
                                   onChange={handleChange}
                                   onBlur={handleBlur}
                                   id={'address'} placeholder={"Type address here..."}
                                   className={errors.address && touched.address ? "input-error" : ""}
                            />
                            {errors.address && touched.address && <p className={'error'}>{errors.address}</p>}
                            <br/><br/>

                            <h4>Mobile Number</h4>
                            <input fullWidth
                                   value={values.mobile}
                                   onChange={handleChange}
                                   onBlur={handleBlur}
                                   id={'mobile'} placeholder={"Type mobile number here..."}
                                   className={errors.mobile && touched.mobile ? "input-error" : ""}
                            />
                            {errors.mobile && touched.mobile && <p className={'error'}>{errors.mobile}</p>}
                            <br/><br/>

                            <h4>Vehicle No</h4>
                            <input fullWidth
                                   value={values.vehicleNo}
                                   onChange={handleChange}
                                   onBlur={handleBlur}
                                   id={'vehicleNo'} placeholder={"Type vehicle number here..."}
                                   className={errors.vehicleNo && touched.vehicleNo ? "input-error" : ""}
                            />
                            {errors.vehicleNo && touched.vehicleNo && <p className={'error'}>{errors.vehicleNo}</p>}
                            <br/><br/>

                            <h4>Vehicle Type</h4>
                            <input fullWidth
                                   value={values.vehicleType}
                                   onChange={handleChange}
                                   onBlur={handleBlur}
                                   id={'vehicleType'} placeholder={"Type vehicle number here..."}
                                   className={errors.vehicleType && touched.vehicleType ? "input-error" : ""}
                            />
                            {errors.vehicleType && touched.vehicleType && <p className={'error'}>{errors.vehicleType}</p>}
                            <br/><br/>

                            <Button variant="contained" color="info" style={{marginRight: "5px"}}
                                    disabled={isSubmitting}
                                    type={'submit'}>Register</Button>

                        </div>

                    </form>

                </div>
            </div>
        </div>
    )
}