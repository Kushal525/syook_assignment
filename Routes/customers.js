const router=require('express').Router();
const  Customers = require('../models/Customer.Model')


//Get All Customers
router.get('/', async (req, res)=> {
    const data = await Customers.find()
    res.send(data)
})


//Customers
/* ---Input---
{
    "name":"Raju",
    "city":"Bangalore"
} */
router.post('/', async (req, res) => {
    const customers = new Customers(req.body);
    await customers.save();
    res.send("Success")  
})


module.exports=router;