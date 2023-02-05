//const express = require('express')
//const Router = express.Router;
//const router = Router();
//the same as:
const router = require('express').Router();
const cubeController = require('./controllers/cubeController')

const homeController = require('./controllers/homeController')
const accessoryController = require('./controllers/accessoryController')


router.get('/', homeController.getHomePage)
router.get('/about', homeController.getAboutPage)
router.get("/404",homeController.getErrorPage)

//app.get('/create', (req,res)=>{
    ///res.render('create')
//})

router.use('/accessory',accessoryController);



router.get('/create', cubeController.getCreateCube);
router.post('/create', cubeController.postCreateCube)
router.get('/details/:cubeId', cubeController.getDetails);

module.exports = router;