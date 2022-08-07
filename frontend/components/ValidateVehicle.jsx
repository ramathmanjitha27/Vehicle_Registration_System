import React, {useState} from 'react'
import {useFormik} from 'formik'
import {basicSchema} from "../Schemas/VehicleSchema";
import axios from "axios";
import  '../App.css'
import {TextField} from "@mui/material";
import Button from "@mui/material/Button";
import DisplayVehicleType from "./DisplayVehicleType";
import ViewVehicle from "./ViewVehicle";
import DisplayDetails from "./DisplayDetails";


export default function ValidateVehicle(props){

    const [vehiNo, setVehiNo] = useState('')
    const [vehicleType, setVehicleType] = useState('')

    const onSubmit = async (values, actions) => {
         let vehicleNumber = values.vehicleNo;
        console.log(`Vehicle No : ${vehicleNumber}`);
        setVehiNo(vehicleNumber)

        let removeSpacesVehiNo =  vehicleNumber.replace(/ /g,'');

        console.log(`Executed ${removeSpacesVehiNo}`)

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
            vehicleNo : ''
        },
        validationSchema: basicSchema,
        onSubmit
    })


    return(
        <div style={{paddingTop:"20px", paddingBottom: "3rem"}}>
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
                        style={{marginRight: "5px", marginTop:'2rem', marginBottom:'1rem'}}
                        disabled={isSubmitting}
                        type={'submit'}>Submit</Button>
                </center>
            </form>

                             <h1>Display Vehicle Type</h1>
                             <h3><i>Vehicle Number</i> : {vehiNo}</h3>
                             <h3><i>Vehicle Type</i>   : {vehicleType}</h3>
        </div>
       </div>
      </div>
     </div>
    )
}













