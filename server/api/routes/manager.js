const express = require('express');
const router = express.Router();
const { addRegularEmployee ,getBranchesByCustomer,
        addCustomer,getAllCustomers,
        getCleaningsByBranch , addCleaningForEmployee,
        updateManagerDetails , getAllWorkers ,  
        managerEditUser } = require('../controller/manager');

const { isManager,isAuthenticated } = require('../middleware/authMiddleware');




// 2 admin add a new worker
router.post('/add-worker', addRegularEmployee);
// isAuthenticated, isManager --- להוסיף אוטנטיקציה 

// 3 admin add a new customer
router.post('/add-customer', addCustomer);
//, isAuthenticated, isManager --- להוסיף אוטנטיקציה 


// 4 5555  get all the customers 5555
router.get('/getAll', getAllCustomers);


// 5 get all the branches of customer
router.get('/:customerId/branches', isAuthenticated, getBranchesByCustomer);


// 6 get all the cleaning of branch
router.get('/:branchId/cleanings', isAuthenticated, getCleaningsByBranch);


// 7 Manager add cleaning to worker 
router.get('/:workerId/cleanings', addCleaningForEmployee);

// edit details
router.put("/update", updateManagerDetails);


router.get("/workers", getAllWorkers);


router.put("/editUser/:id" ,managerEditUser);

module.exports = router;
