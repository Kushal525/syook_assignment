const express = require("express");
require('./db/connection');
const app = express();

const itemsRouter = require('./Routes/items');
const customersRouter = require('./Routes/customers');
const vehiclesRouter = require('./Routes/vehicles');
const ordersRouter = require('./Routes/orders');
const deliveryOrdersRouter = require('./Routes/deliveryOrders');

app.use(express.json())
app.use(express.urlencoded({ extended : false}))

const port = process.env.PORT || 3000

app.use('/',itemsRouter);

app.use('/customers', customersRouter);

app.use('/vehicles', vehiclesRouter);

app.use('/orders', ordersRouter);

app.use('/deliverytocustomers', deliveryOrdersRouter);

app.listen(port);