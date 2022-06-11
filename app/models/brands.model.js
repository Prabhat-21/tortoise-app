module.exports = (sequelize, Sequelize) => {
    const  brands = sequelize.define("brands", {
      Name: {
        type: Sequelize.STRING
      }
    });
    return brands;
  };