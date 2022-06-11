module.exports = (sequelize, Sequelize) => {
    const  promotions = sequelize.define("promotions", {
      planID : {
          type:Sequelize.INTEGER
      },
      promotionType:{
          type:Sequelize.ENUM,
          values:['NoOfUsers','TimePeriod']
      },
      Attributes:{
        type: Sequelize.TEXT,
        get: function () {
             return JSON.parse(this.getDataValue('value'));
         },
         set: function (value) {
             this.setDataValue('value', JSON.stringify(value));
         },
      }
    });
    return promotions;
  };