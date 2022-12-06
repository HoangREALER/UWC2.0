const express = require('express');
const { loginView } = require('../controllers/LoginController');
const { mapView } = require('../controllers/MapController');
const { employeeList, profileView, scheduleView } = require('../controllers/EmployeeController')
const { dashboardView } = require('../controllers/DashboardController.js');
const { vehicleView } = require('../controllers/VehicleController');
const router = express.Router();

router.get('/', dashboardView);
router.get('/login', loginView);
router.get('/map', mapView);
router.get('/employee', employeeList);
router.get('/employee/:id', profileView);
router.get('/employee/:id/schedule', scheduleView);
router.get('/vehicle', vehicleView);


module.exports = () => {
    return router;
};