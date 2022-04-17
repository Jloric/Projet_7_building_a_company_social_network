module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("user", {
      email: {type: Sequelize.STRING,
              allowNull:false,
              unique:true},
      password: {type: Sequelize.STRING},
      nom: {type: Sequelize.STRING},
      prénom: {type: Sequelize.STRING},
      role:{type: Sequelize.STRING}
    });
    return User;
  };

