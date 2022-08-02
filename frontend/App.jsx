import React from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import RegisterVehicle from "./components/RegisterVehicle";
import ViewVehicles from "./components/ViewVehicles";
import Home from "./components/Home";
import ViewVehicle from "./components/ViewVehicle";
import EditVehicle from "./components/EditVehicle";



function App(){
    return(
        <div>
            <Router>
                <Routes>
                    <Route exact path = '/' element = {<Home/>}/>
                    <Route exact path = '/register' element = {<RegisterVehicle/>}/>
                    <Route exact path = '/vehicles' element = {<ViewVehicles/>}/>
                    <Route exact path = '/vehicle' element = {<ViewVehicle/>}/>
                    <Route exact path = '/edit' element = {<EditVehicle/>}/>
                </Routes>
            </Router>
        </div>
    )
}

export default App;