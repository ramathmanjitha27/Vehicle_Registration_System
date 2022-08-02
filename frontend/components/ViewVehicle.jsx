import React, {useEffect, useState} from "react";

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
        <div>
            <h1>Vehicle Details</h1>

            <form>

                <lable>Owner's name</lable>
                <input type={'text'} id={'ownerName'}  value={ownerName} readOnly={true}/>
                <br/><br/>

                <lable>NIC</lable>
                <input type={'text'} id={'NIC'} value={NIC} readOnly={true}/>
                <br/><br/>

                <lable>Address</lable>
                <input type={'text'} id={'address'} value={address} readOnly={true} />
                <br/><br/>

                <lable>Mobile Number</lable>
                <input type={'number'} id={'mobile'} value={mobile} readOnly={true}/>
                <br/><br/>

                <lable>Vehicle No</lable>
                <input type={'text'} id={'vehicleNo'}  value={vehicleNo} readOnly={true}/>
                <br/><br/>

                <lable>Vehicle Type</lable>
                <input type={'text'} id={'vehicleType'}  value={vehicleType} readOnly={true}/>
                <br/><br/>
            </form>
        </div>
    )
}