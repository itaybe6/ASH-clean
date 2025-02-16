const express = require('express');
const router = express.Router();
const { getBranchesByCustomer,getCleaningsByBranch 
    ,getCustomerById,editCustomerDetails ,getAllCleaningsForCustomer
    ,deleteBranchAndCleanings, sendContactEmail,sendEmail } = require('../controller/costumer');
const { isAuthenticated } = require('../middleware/authMiddleware');


// 1 get all the cleaning of branch  ----------------> ????
router.get('/:branchId/cleanings', getCleaningsByBranch);


// 2 get all the branches of customer ----------------> ????
router.get('/:customerId/branches', getBranchesByCustomer);


// 3 get customer details to show data
router.get('/:customerId', getCustomerById);


// deleteee ?????????????????????????????????
router.put('/:customerId/edit', editCustomerDetails);


// 5 delete branch ????????????????????????????????????????????????????????
router.delete('/:customerId/branches/:branchId', deleteBranchAndCleanings);


// 6 get all the cleaning of customers 
router.get('/:customerId/cleanings', getAllCleaningsForCustomer);


// send mail contact us 555
router.post("/contact", sendContactEmail);


router.post("/sendEmail", sendEmail);


module.exports = router;
