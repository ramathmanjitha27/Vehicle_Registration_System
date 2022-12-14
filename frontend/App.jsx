import React from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import RegisterVehicle from "./components/RegisterVehicle";
import ViewVehicles from "./components/ViewVehicles";
import Home from "./components/Home";
import ViewVehicle from "./components/ViewVehicle";
import EditVehicle from "./components/EditVehicle";
import ValidateVehicle from "./components/ValidateVehicle";
import Header from "./components/Header";
// import "./App.css";

function App(){
    return(
        <div>
            <Router>
                <Header/>
                <Routes>
                    <Route exact path = '/' element = {<Home/>}/>
                    <Route exact path = '/register' element = {<RegisterVehicle/>}/>
                    <Route exact path = '/vehicles' element = {<ViewVehicles/>}/>
                    <Route exact path = '/vehicle' element = {<ViewVehicle/>}/>
                    <Route exact path = '/edit' element = {<EditVehicle/>}/>
                    <Route exact path = '/validate' element = {<ValidateVehicle/>}/>
                </Routes>
            </Router>
        </div>
    )
}

export default App;