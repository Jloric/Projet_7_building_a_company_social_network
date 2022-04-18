module.exports = (sequelize, Sequelize) => {
    const Message = sequelize.define("message", {
      content: {type: Sequelize.TEXT,
                allowNull:false},
      userId: {type: Sequelize.INTEGER},
      lastName: {type: Sequelize.TEXT},
      firstName: {type: Sequelize.TEXT},
      articleId: {type: Sequelize.INTEGER}
    });
    return Message;
  };