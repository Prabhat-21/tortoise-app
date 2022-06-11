
module.exports = (sequelize, Sequelize) => {
    const  customerGoals = sequelize.define("customerGoals", {
      planID: {
        type: Sequelize.STRING
      },
      planName: {
        type: Sequelize.STRING
      },
      selectedAmount:{
        type:Sequelize.INTEGER
      },
      selectedTenure:{
        type:Sequelize.INTEGER
      },
      startedDate:{
        type:Sequelize.DATEONLY
      },
      depositedAmount:{
        type:Sequelize.INTEGER
      },
      benefitPercentage:{
          type:Sequelize.INTEGER
      },
      benefitType:{
        type: Sequelize.ENUM,
        values: ['cashback', 'extraVoucher']
      }
    });
    return customerGoals;
  };