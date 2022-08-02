const express = require('express')

const addVehicle = require('../controllers/vehicleController').add_Vehicle
const getVehicles = require('../controllers/vehicleController').get_Vehicles
const getVehicle = require('../controllers/vehicleController').get_vehicle
const deleteVehicle = require('../controllers/vehicleController').delete_vehicle
const updateVehicle = require('../controllers/vehicleController').update_Vehicle

const router = express.Router();

router.post('/', addVehicle)
router.get('/', getVehicles)
router.get('/:id', getVehicle)
router.delete('/delete', deleteVehicle)
router.put('/update/:id', updateVehicle)

module.exports = router;