const express = require('express')

const addVehicle = require('../controllers/vehicleController').add_Vehicle
const getVehicles = require('../controllers/vehicleController').get_Vehicles
const getVehicle = require('../controllers/vehicleController').get_vehicle
const deleteVehicle = require('../controllers/vehicleController').delete_vehicle
const updateVehicle = require('../controllers/vehicleController').update_Vehicle
const validateVehicle = require('../controllers/vehicleController').validate_Vehicle

const router = express.Router();

router.post('/', addVehicle)
router.get('/', getVehicles)
router.get('/:id', getVehicle)
router.delete('/delete/:id', deleteVehicle)
router.put('/update/:id', updateVehicle)
router.get('/validate/:id', validateVehicle)

module.exports = router;