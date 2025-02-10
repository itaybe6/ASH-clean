const express = require('express');
const multer = require('multer');
const router = express.Router();
const { getCleaningsByEmployee, getAllCustomers,
     updateCleaningWithImage, getEmployeeById,
     updateEmployeeDetails, cancelCleaning 
} = require('../controller/worker');


const upload = multer(); 

const { isAuthenticated } = require('../middleware/authMiddleware');

router.put('/cleanings/:cleaningId', upload.single('image'), updateCleaningWithImage);




router.get('/:employeeId/cleanings', isAuthenticated, getCleaningsByEmployee);




// 4 get all the customers
router.get('/getAll', isAuthenticated, getAllCustomers);


// 5 fetch employee details 
router.get('/:employeeId', getEmployeeById);


// 6 edit details emplpyee
router.put('/updateDetails/:employeeId', updateEmployeeDetails);


// 7 worker cancel the cleaning
router.put('/cleanings/:cleaningId/cancel', cancelCleaning);



module.exports = router;
