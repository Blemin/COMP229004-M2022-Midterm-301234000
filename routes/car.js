var express = require('express');
var router = express.Router();

let carController = require('../controllers/car');

// Helper function for guard purposes
function requireAuth(req, res, next)
{
    if(!req.isAuthenticated())
    {
        return res.redirect('/users/signin');
    }
    next();        

}

/* GET list of items */
router.get('/list', carController.carList);

// Route for Details
router.get('/details/:id', requireAuth, carController.details);

// Routers for edit
router.get('/edit/:id', requireAuth, carController.displayEditPage);
router.post('/edit/:id', carController.processEditPage);

// Delete
router.get('/delete/:id', requireAuth, carController.performDelete);

/* GET Route for displaying the Add page - CREATE Operation */
router.get('/add', requireAuth, carController.displayAddPage);

/* POST Route for processing the Add page - CREATE Operation */
router.post('/add', requireAuth, carController.processAddPage);

module.exports = router;