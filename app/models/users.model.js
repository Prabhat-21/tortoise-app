module.exports = (sequelize, Sequelize) => {
    const  users = sequelize.define("users", {
      Name: {
        type: Sequelize.STRING, allowNull: false
      },
      Email: {
        type: Sequelize.STRING, allowNull: false
      }
    });
    return users;
  };