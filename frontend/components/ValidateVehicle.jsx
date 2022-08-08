import React, {useState} from 'react'
import {useFormik} from 'formik'
import {basicSchema} from "../Schemas/VehicleSchema";
import axios from "axios";
import  '../App.css'
import {Link} from "react-router-dom";
import Button from "@mui/material/Button";

//Validate vehicle type based on user entered vehicle number
export default function ValidateVehicle(){

    const [vehiNo, setVehiNo] = useState('')
    const [vehicleType, setVehicleType] = useState('')

    const onSubmit = async (values, actions) => {
        let vehicleNumber = values.vehicleNo;
        setVehiNo(vehicleNumber)
        let removeSpacesVehiNo =  vehicleNumber.replace(/ /g,'');

        axios.get('http://localhost:8000/api/vehicle/validate/'+removeSpacesVehiNo)
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
            vehicleNo : ''
        },
        validationSchema: basicSchema,
        onSubmit
    })

    const passValue= (vehicleNo, VehicleType)=>{
        let removeSpacesVehiNo =  vehicleNo.replace(/ /g,'');
        localStorage.setItem('vehicleNo', removeSpacesVehiNo)
        localStorage.setItem('VehicleType', VehicleType)
    }

    return(
        <div style={{paddingTop:"5px", paddingBottom: "3rem"}}>
                        <div style={{width: "60%", margin: "auto", }}>

                              <center><h2>Validate Vehicle Type</h2></center>
                              <div
                             style={{
                                    borderRadius: "10px",
                                     margin: "10px",
                                     padding: "",
                                      boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
                                 }}
                             >
                         <div style={{paddingInline: "3rem", paddingTop: "3rem", paddingBottom: "3rem"}}>

            <form onSubmit={handleSubmit}>

                <input fullWidth
                    value={values.vehicleNo}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    id={'vehicleNo'} placeholder={'Type vehicle number here...'}
                    className={errors.vehicleNo && touched.vehicleNo ? "input-error" : ""}
                />
                {errors.vehicleNo && touched.vehicleNo && <p className={'error'}>{errors.vehicleNo}</p>}

                <center>
                <Button variant="contained" color="info"
                        style={{marginRight: "5px", marginTop:'1rem', marginBottom:'1rem'}}
                        disabled={isSubmitting}
                        type={'submit'}>Validate</Button>
                </center>
            </form>
              <hr/>
            <h1>Vehicle Type</h1>
            <h3><i>Vehicle Number</i> : {vehiNo}</h3>
            <h3><i>Vehicle Type</i>   : {vehicleType}</h3>

              <center>
                   <Link style={{pointerEvents: vehicleType ? '' : 'none'}} to={'/register'}>
                      <Button disabled={!vehicleType}
                              onClick={passValue(vehiNo, vehicleType)}
                              variant="contained" color="info"
                               style={{marginRight: "5px", marginTop:'2rem', marginBottom:'1rem'}}
                       >Register</Button>
                   </Link>
              </center>

        </div>
       </div>
      </div>
     </div>
    )
}