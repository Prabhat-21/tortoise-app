const express = require("express");
const cors = require("cors");
const app = express();

const brandsRouter = require('./routers/brands.router.js')
const customerGoalsRouter = require('./routers/customerGoals.router.js')
const planRouter = require('./routers/plan.router.js')
const promotionRouter = require('./routers/promotions.router.js')
const usersRouter = require('./routers/users.router.js')

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));
// parse requests of content-type - application/json

app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded

app.use(express.urlencoded({ extended: true }));
// simple route

app.get("/", (req, res) => {
  res.json({ message: "Welcome to tortoise application." });
});

app.use(brandsRouter);
app.use(customerGoalsRouter);
app.use(planRouter);
app.use(promotionRouter);
app.use(usersRouter);
// set port, listen for requests
const PORT = process.env.PORT || 8081;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});