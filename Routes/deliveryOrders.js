const router=require('express').Router();
const Customers = require('../models/Customer.Model');
const DeliveryVehicles = require('../models/DeliveryVehicles.Model');
const Items = require('../models/Items.Model');
const Orders = require('../models/Orders.Model');

//Delivery to customer
router.post('/', async (req, res) => {
    const orders =  await Orders.findOne({isDelivered: false})
    const order_details = {
        Order_Delivered : "Success",
        Order_Details : {}
    }
    if(orders){
        const item = await Items.findOne({_id: orders.itemId})
        const item_details = {
            Item_Name : item.name,
            Price : item.price
        }
        order_details.Order_Details.Item = item_details

        const customer = await Customers.findOne({_id: orders.customerId})
        const customer_details = {
            name: customer.name,
            city: customer.city
        }
        order_details.Order_Details.Customer = customer_details

        const deliveryVehicle = await DeliveryVehicles.findOne({_id: orders.deliveryVehicleId})
        await deliveryVehicle.updateOne({activeOrdersCount:deliveryVehicle.activeOrdersCount-1})
        const vehicle_details = {
            vehicleType: deliveryVehicle.vehicleType,
            registrationNumber : deliveryVehicle.registrationNumber,
            city : deliveryVehicle.city
        }
        order_details.Order_Details.Vehicle_Details = vehicle_details
        await orders.updateOne({isDelivered: true})
        res.send(order_details)
    }else{
        res.send("No order to delivery")
    }
})

module.exports=router;