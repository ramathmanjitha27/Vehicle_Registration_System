import React, {useEffect, useState} from "react";


export default function DisplayVehicleType(){
    const [vehiNo, setVehiNo] = useState('')
    const [vehicleType, setVehicleType] = useState('')

    useEffect(()=>{
        setVehiNo(localStorage.getItem('vehiNo'))
        setVehicleType(localStorage.getItem('vehicleType'))

    },[])

    return(
        <div>
            <h1>Display Vehicle Type</h1>
            <h3><i>Vehicle Number</i> : {vehiNo}</h3>
            <h3><i>Vehicle Type</i>   : {vehicleType}</h3>
        </div>
    )
}