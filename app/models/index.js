const dbConfig = require("../config/db.config.js");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = require("./users.model.js")(sequelize, Sequelize);
db.brands = require("./brands.model.js")(sequelize, Sequelize);
db.plans = require("./plans.model.js")(sequelize, Sequelize);
db.customerGoals = require("./customerGoals.model.js")(sequelize, Sequelize);
db.promotions = require("./promotions.model.js")(sequelize, Sequelize);
db.sequelize.sync();

module.exports = db;