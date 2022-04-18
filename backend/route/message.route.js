const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');

const Messagectrl = require('../controllers/Message.controller');

router.get('/',auth,Messagectrl.getAllMessages);
router.post('/',auth ,Messagectrl.createMessage);
router.get('/:id',auth ,Messagectrl.findOneMessage);
router.put('/:id',auth ,Messagectrl.updateMessage);
router.delete('/:id',auth ,Messagectrl.deleteMessage);



module.exports = router;