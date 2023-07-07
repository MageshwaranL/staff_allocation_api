const app = require('express'); //import express
const router = app.Router();

const vendorModule = require('../controllers/vendorModule');
const branchesModule = require('../controllers/branchesdepentModule');
const masterdutyModule = require('../controllers/masterdutyModule');
const staffModule = require('../controllers/staffModule')
const shiftModule = require('../controllers/shiftModule');





//Register Vendor 
router.post('/registervendor', vendorModule.newvendorregister);
router.get('/getvendor', vendorModule.getVendor);
router.delete('/deletevendor/:id', vendorModule.deleteVendor);
router.put('/updatevendor/:id', vendorModule.updateVendor);



//branches depent filter
router.get('/api/branches/cities', branchesModule.getcities)
router.get('/api/branches/countries', branchesModule.getcountries)
router.get('/api/branches/states', branchesModule.getstates)



//master duty

router.get('/api/floor/masterduty', masterdutyModule.getmasterduty)



//staff 

router.get('/api/staff/staffsearch', staffModule.staffSearch)
router.post('/api/staff/staffregister', staffModule.staffRegister);
router.get('/api/staff/staffprofile/:id', staffModule.staffProfile);





//shift 
router.get('/api/shift/shiftsearch', shiftModule.shiftSearch)





module.exports = router; // export to use in server.js