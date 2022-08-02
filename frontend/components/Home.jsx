import React from "react";
import {Link} from "react-router-dom";

export default function Home(){
    return(
        <div>
            <h1>Welcome to Vehicle Registration System</h1>

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