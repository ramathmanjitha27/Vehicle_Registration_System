import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

export default function ViewVehicles(){

    const [vehicles, setVehicles] = useState([])

    useEffect(()=>{

        function getVehicles() {
            axios.get('http://localhost:8000/api/vehicle/')
                .then((res) => {
                    setVehicles(res.data)
                    console.log(res.data)
                })
                .catch((err)=>{
                    alert(err.message)
                })
        }

        getVehicles();
    },[])
    return(
        <div>
            <h1>Available Vehicles</h1>

            <table>
                <thead>
                <tr>
                    <th></th>
                    <th>Vehicle No</th>
                    <th>Owner's name</th>
                    <th>Vehicle Type</th>
                </tr>
                </thead>
                <tbody>
                {vehicles.map((vehicle, index )=>{

                    const passVehicle = (vehicle)=>{
                        const{_id, ownerName, address, NIC, mobile, vehicleNo, vehicleType} = vehicle;

                        localStorage.setItem('id',_id)
                        localStorage.setItem('ownerName',ownerName)
                        localStorage.setItem('address',address)
                        localStorage.setItem('NIC',NIC)
                        localStorage.setItem('mobile',mobile)
                        localStorage.setItem('vehicleNo',vehicleNo)
                        localStorage.setItem('vehicleType',vehicleType)
                    }

                    return(
                        <tr>
                        <td key={index}>{index+1}</td>
                        <td>{vehicle.vehicleNo}</td>
                        <td>{vehicle.ownerName}</td>
                        <td>{vehicle.vehicleType}</td>

                        <td>
                            <Link to={'/vehicle'}>
                            <button onClick={()=>{passVehicle(vehicle)}}>View</button>
                            </Link>
                        </td>
                            <td>
                                <Link to={'/edit'}>
                                <button onClick={()=>{passVehicle(vehicle)}}>Edit</button>
                                </Link>
                            </td>

                            <td>
                                <button>Delete</button>
                            </td>
                        </tr>
                            )
                })}
                </tbody>
            </table>
            </div>
    )
}