import React, {useEffect, useState} from "react";
import axios from "axios";
import Button from "@mui/material/Button";
import {useFormik} from "formik";
import {registerSchema} from "../Schemas/RegisterVehicleSchema";

//Register vehicle details
export default function RegisterVehicle(){

    const [vehicleNo, setVehicleNo] = useState('')
    const [vehicleType, setVehicleType] = useState('')

    useEffect(()=>{
        setVehicleNo(localStorage.getItem('vehicleNo'))
        setVehicleType(localStorage.getItem('VehicleType'))
    },[])

    const onSubmit = async (values, actions) => {
        console.log('submit called')
        let ownerName = values.ownerName;
        let address = values.address;
        let NIC = values.NIC;
        let mobile = values.mobile;
        console.log(`Vehicle No : ${vehicleNo}`);

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
                window.location.href = '/'
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

                            <Button variant="contained" color="info" style={{marginRight: "5px"}}
                                    type={'submit'}>Register
                            </Button>

                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}