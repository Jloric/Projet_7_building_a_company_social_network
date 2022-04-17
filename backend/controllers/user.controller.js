const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const db=require('../model/');
const User = db.users;


exports.signup = (req, res, next) => {
    bcrypt.hash(req.body.password, 10)
        .then(hash => {
            const user = {
                email: req.body.email,
                password: hash,
                nom:req.body.nom ,
                prénom:req.body.prénom ,
                role:"standard"
            };
            User.create(user)
                .then(() => res.status(201).json({ message: 'Utilisateur crée' }))
                .catch(error => res.status(400).json({ error }));
        })
        .catch(error => 
          res.status(500).send({
            message:
              error.message || "Il y a eu une erreur lors de la crétion de l'utilisateur."
          }))
};

exports.login = (req, res, next) => {
      User.findOne({where: {email: req.body.email} })
      .then(user => {
        if (!user) {
          console.log('Utilisateur non trouvé !')
          return res.status(401).json({ error: 'Utilisateur non trouvé !' });
        }
        bcrypt.compare(req.body.password, user.password)
          .then(valid => {
            if (!valid) {
              console.log('Mot de passe incorrect !')
              return res.status(401).json({ error: 'Mot de passe incorrect !' });
            }
            res.status(200).json({
              userId: user.id,
              token: jwt.sign(
                { userId: user.id },
                'RANDOM_TOKEN',
                { expiresIn: '24h' }
              )
            });
          })
          .catch(error => res.status(500).json({ error }));
      })
      .catch(error => res.status(500).json({ error }));
};
exports.getUser = (req, res) => {
  const id = req.params.id;
  User.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find User with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving User with id=" + id
      });
    });
};

exports.deleteUser = (req, res) => {
  const id = req.params.id;
  User.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "User was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete User with id=${id}. Maybe User was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete User with id=" + id
      });
    });
}