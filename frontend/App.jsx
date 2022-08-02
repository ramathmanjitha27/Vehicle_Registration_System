import React from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import RegisterVehicle from "./components/RegisterVehicle";



function App(){
    return(
        <div>
            <h1>Welcome to Vehicle Registration System</h1>



            <Router>
                <Routes>
                    <Route exact path = '/' element = {<RegisterVehicle/>}/>
                </Routes>
            </Router>

            {/*<Link to={'/registerVehicle'}>*/}
            {/*    <button>Register Vehicle</button>*/}
            {/*</Link>*/}

        </div>
    )
}

export default App;