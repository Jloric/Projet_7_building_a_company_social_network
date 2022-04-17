module.exports = (sequelize, Sequelize) => {
    const Post = sequelize.define("post", {
      title: {type: Sequelize.STRING,
              allowNull:false},
      content: {type: Sequelize.TEXT},
      userId: {type: Sequelize.INTEGER},
    });
    return Post;
  };