const router=require('express').Router();
const DeliveryVehicles = require('../models/DeliveryVehicles.Model')

//Get All Vehicles
router.get('/', async (req, res) => {
    const data = await DeliveryVehicles.find()
    res.send(data)
})


//Add Delivey Vehicles
/* ---Input---
{
    "registrationNumber" : "KA 53 KA 1234",
    "vehicleType": "bike",
    "city": "Bangalore"
}*/
router.post('/', async (req, res) => {
    const deliveryVehicle = new DeliveryVehicles(req.body);
    const registrationNumber = await DeliveryVehicles.findOne({"registrationNumber":req.body.registrationNumber})
    if(!registrationNumber){
        await deliveryVehicle.save();
        res.send("Success")  
    }else{
        res.send("Registration Number is already exist")
    }
      
  })

module.exports=router;