const db = require("../model");
const Message = db.messages;
// Create and Save a new Message
exports.createMessage = (req, res) => {
    // Create a Message
    const message = {
      content:req.body.content,
      userId:req.body.userId,
      lastName:req.body.lastName,
      firstName:req.body.firstName,
      articleId:req.body.articleId
    };
    // Save Message in the database
    Message.create(message)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Message."
        });
      });
};
// Retrieve all Message from the database.
exports.getAllMessages = (req, res) => {
  Message.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving messages."
      });
    });
};
// Find a single Message with an id
exports.findOneMessage = (req, res) => {
  const id = req.params.id;
  Message.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Message with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Message with id=" + id
      });
    });
};
// Update a Message by the id in the request
exports.updateMessage = (req, res) => {
  const id = req.params.id;
  Message.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Message was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Message with id=${id}. Maybe Message was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Message with id=" + id
      });
    });
};
// Delete a Message with the specified id in the request
exports.deleteMessage = (req, res) => {
  const id = req.params.id;
  Message.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Message was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Message with id=${id}. Maybe Message was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Message with id=" + id
      });
    });
};
