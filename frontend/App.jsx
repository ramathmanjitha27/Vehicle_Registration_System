import React from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import RegisterVehicle from "./components/RegisterVehicle";
import ViewVehicles from "./components/ViewVehicles";
import Home from "./components/Home";



function App(){
    return(
        <div>
            <Router>
                <Routes>
                    <Route exact path = '/' element = {<Home/>}/>
                    <Route exact path = '/register' element = {<RegisterVehicle/>}/>
                    <Route exact path = '/vehicles' element = {<ViewVehicles/>}/>
                </Routes>
            </Router>

            {/*<Link to={'/registerVehicle'}>*/}
            {/*    <button>Register Vehicle</button>*/}
            {/*</Link>*/}

        </div>
    )
}

export default App;