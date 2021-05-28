const router=require('express').Router();
const Items  = require('../models/Items.Model')


//Get All Items
router.get('/', async (req, res)=> {
    const data = await Items.find()
    res.send(data)
})


//Add Items
/* ---Input---
{
    "name":"Desktop",
    "price":50000
} */
router.post('/', async (req, res) => {
    const items = new Items(req.body);
    await items.save();
    res.send("Success") 
  })
module.exports=router;