import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import {styled} from "@mui/material/styles";
import TableCell, {tableCellClasses} from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import Table from "@mui/material/Table";
import Button from "@mui/material/Button";
import TableBody from "@mui/material/TableBody";


const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: "#093e94",
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));


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
        <div style={{width: "60%", margin: "auto", paddingTop:"40px"}}>

            <center><h1>Available Vehicles</h1></center>

            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell align="center"> index </StyledTableCell>
                            <StyledTableCell align="center"> Vehicle No</StyledTableCell>
                            <StyledTableCell align="center">Owner's name</StyledTableCell>
                            <StyledTableCell align="center">Vehicle Type</StyledTableCell>
                            <StyledTableCell align="center">View</StyledTableCell>
                            <StyledTableCell align="center">Edit</StyledTableCell>
                            <StyledTableCell align="center">Delete</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
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

                            function getVehicles() {
                                axios.get('http://localhost:8000/api/vehicle/')
                                    .then((res) => {
                                        setVehicles(res.data)
                                        console.log(res.data)
                                    })
                            }

                            function deleteVehicle(id){
                                axios.delete('http://localhost:8000/api/vehicle/delete/'+id)
                                    .then(()=>{
                                        getVehicles()
                                    })
                            }

                            return(
                                <StyledTableRow>
                                    <StyledTableCell component="th" scope="row" align="center" key={index}>{index+1}</StyledTableCell>
                                    <StyledTableCell align="center">{vehicle.vehicleNo}</StyledTableCell>
                                    <StyledTableCell align="center">{vehicle.ownerName}</StyledTableCell>
                                    <StyledTableCell align="center">{vehicle.vehicleType}</StyledTableCell>

                                    <StyledTableCell align="center">
                                        <Link to={'/vehicle'}>
                                            <Button variant="contained" onClick={()=>{passVehicle(vehicle)}}>View</Button>
                                        </Link>
                                    </StyledTableCell>

                                    <StyledTableCell align="center">
                                        <Link to={'/edit'}>
                                            <Button variant="contained" onClick={()=>{passVehicle(vehicle)}}>Edit</Button>
                                        </Link>
                                    </StyledTableCell>

                                    <StyledTableCell align="center">

                                            <Button variant="contained" onClick={()=>{deleteVehicle(vehicle._id)}}>Delete</Button>

                                                </StyledTableCell>
                                                </StyledTableRow>
                                                )
                                            })}
                                        </TableBody>

                                    </Table>
                                </TableContainer>
                        </div>
                        )
                        }