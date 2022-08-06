import React from "react";
import {Link} from "react-router-dom";
import ValidateVehicle from "./ValidateVehicle";

export default function Home(){
    return(
        <div>
            <center><h1>Welcome to Vehicle Registration System</h1></center>

            <ValidateVehicle/>
            <br/><br/>

            <Link to={'/register'}>
                <button>Register</button>
            </Link>

            <br/><br/>
            <Link to={'/vehicles'}>
                <button>Vehicles</button>
            </Link>

        </div>
    )
}