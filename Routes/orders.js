const router=require('express').Router();
const Customers = require('../models/Customer.Model');
const DeliveryVehicles = require('../models/DeliveryVehicles.Model');
const Items = require('../models/Items.Model');
const Orders = require('../models/Orders.Model');


//Check Order Details
router.get('/', async (req, res)=> {
    const orders = await Orders.find()
    res.send(orders)
})


//Add Orders
/* ---Input---
{
    "itemName" : itemName,
    "customerName": customerName
}*/
router.post('/', async (req, res) => {
    const orderNumber = await Orders.find().countDocuments()+1001;
    const itemName = req.body.itemName;
    const customerName = req.body.customerName;
    const item = await Items.findOne({name:itemName});
    const itemId = item._id;
    const price = item.price;
    const customer = await Customers.findOne({name:customerName})

    if(customer){
        const customerId = customer._id
        const deliveryVehicle = await DeliveryVehicles.findOne({activeOrdersCount:0});
        if(deliveryVehicle){
            const deviveryVehicleId = deliveryVehicle._id;
            const orders = new Orders({orderNumber: orderNumber, itemId: itemId, price: price,customerId: customerId, deliveryVehicleId: deviveryVehicleId });
            await orders.save();
            await deliveryVehicle.updateOne({activeOrdersCount:1});
            res.send(orders);
        }else{
            const deliveryVehicle1 = await DeliveryVehicles.findOne({activeOrdersCount:1});
            if(deliveryVehicle1){
                const deviveryVehicleId = deliveryVehicle1._id;
                const orders = new Orders({orderNumber: orderNumber, itemId: itemId, price: price,customerId: customerId, deliveryVehicleId: deviveryVehicleId });
                await orders.save();
                await deliveryVehicle1.updateOne({activeOrdersCount:2});
                res.send(orders);
            }else{
                res.send("No vehicle is available");
            }
        }
    }else{
        res.send("Customer Not Found!")
    }

})



module.exports=router;