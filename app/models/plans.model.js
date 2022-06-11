module.exports = (sequelize, Sequelize) => {
    const  plans = sequelize.define("plans", {
      planName: {
        type: Sequelize.STRING
      },
      brandID:{
        type:Sequelize.INTEGER
      },
      amountOptions: {
        type: Sequelize.TEXT,
         get: function () {
              return JSON.parse(this.getDataValue('amountOptions'));
          },
          set: function (value) {
              this.setDataValue('amountOptions', JSON.stringify(value));
          },
      },
      tenureOptions:{
        type: Sequelize.TEXT,
        get: function () {
             return JSON.parse(this.getDataValue('tenureOptions'));
         },
         set: function (value) {
             this.setDataValue('tenureOptions', JSON.stringify(value));
         },
      },
      benefitPercentage:{
          type:Sequelize.INTEGER
      },
      benefitType:{
        type: Sequelize.ENUM,
        values: ['cashback', 'extraVoucher']
      }
    });
    return plans;
  };