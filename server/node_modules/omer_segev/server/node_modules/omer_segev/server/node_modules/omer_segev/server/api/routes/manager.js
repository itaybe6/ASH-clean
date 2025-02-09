const express = require('express');
const router = express.Router();
const { addRegularEmployee ,getBranchesByCustomer,
        addCustomer,getAllCustomers,
        getCleaningsByBranch , addCleaningForEmployee,
        updateManagerDetails , getAllWorkers ,  
        managerEditUser ,addBranchToCustomer ,
        updateBranch ,getCleaningsByEmployee , getAllCleanings 
        ,getImgCleaning , deleteBranchById , deleteCleaning} = require('../controller/manager');

const { isManager,isAuthenticated } = require('../middleware/authMiddleware');




router.post('/add-worker', addRegularEmployee);
router.post('/add-customer', addCustomer);
router.get('/getAll', getAllCustomers);
router.get('/:customerId/branches', getBranchesByCustomer);
router.get('/:workerId/WorkerCleanings',  getCleaningsByEmployee);
router.post('/:workerId/cleanings', addCleaningForEmployee);
router.put("/update", updateManagerDetails);
router.get("/workers", getAllWorkers);
router.post('/addBranch/:customerId', addBranchToCustomer);
router.put('/editBranch/:branchId', updateBranch);
router.put('/editUser/:id',managerEditUser);
router.get("/getAllCleanings", getAllCleanings);
router.get('/cleanings/:cleaningId/image' ,getImgCleaning )
router.delete('/deleteBranch/:branchId', deleteBranchById);

router.delete('/delete-cleaning/:cleaningId', deleteCleaning);


router.get('/:branchId/cleanings', isAuthenticated, getCleaningsByBranch);

module.exports = router;
