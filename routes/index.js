const express = require('express');
const { loginView } = require('../controllers/LoginController');
const { mapView } = require('../controllers/MapController');
const { employeeList } = require('../controllers/EmployeeController')
const router = express.Router();


router.get('/login', loginView);
router.get('/map', mapView);
router.get('/employee', employeeList);


module.exports = () => {
    return router;
};