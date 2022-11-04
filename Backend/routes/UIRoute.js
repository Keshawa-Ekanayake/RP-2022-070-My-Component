// ----------------------------
//     PRODUCT ROUTE - BACKEND
// ----------------------------
//Function - Product management
//Student name - H.M. Kasuni Navodya
//Student ID - IT19144986

const router = require('express').Router();

//Imported Product Model
const UIModel = require('../models/UIModel');

/**Add a new product - ADMIN TASK
 * API - http://localhost:3001/product/addProduct
*/
router.route('/addUIModel').post(async (req, res) => {
    if(req.body){
        const uimodel = new UIModel(req.body);
        await uimodel.save()
        .then(data => {
            res.status(200).send({data: data});
        }).catch(error => {
            res.status(500).send({error: error});
        })
    }
});

/**Get all created products - ADMIN TASK
 * API - http://localhost:3001/product/getAllProducts
*/ 
router.route('/getUIModel').get(async (req, res) => {
    await UIModel.find({})
        .then(data => {
            res.status(200).send({ data: data });
        }).catch(error => {
            res.status(500).send({ error: error });
        })
});

router.route('/deleteUIModel').delete(async (req, res) => {
    await UIModel.deleteMany({})
        .then(data => {
            res.status(200).send({ data: data });
        }).catch(error => {
            res.status(500).send({ error: error });
        })
});

//implement a delete all route
module.exports = router;