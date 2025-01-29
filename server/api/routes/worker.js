const express = require('express');
const router = express.Router();

const { getCleaningsByEmployee ,getAllCustomers,
     updateCleaningWithImage , getEmployeeById,
     updateEmployeeDetails , cancelCleaning} = require('../controller/worker');

const { isAuthenticated } = require('../middleware/authMiddleware');



// 1 fecth cleaning for worker
router.get('/:employeeId/cleanings', isAuthenticated, getCleaningsByEmployee);


// 3 worker upload img and change the status of the blecmimg
router.put('/cleanings/:cleaningId', updateCleaningWithImage);


// 4 get all the customers
router.get('/getAll', isAuthenticated, getAllCustomers);


// 5 fetch employee details 
router.get('/:employeeId', getEmployeeById);


// 6 edit details emplpyee
router.put('/updateDetails/:employeeId', updateEmployeeDetails);

// 7 worker cancel the cleaning
router.put('/cleanings/:cleaningId/cancel', cancelCleaning);



module.exports = router;
