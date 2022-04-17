const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');

const Postctrl = require('../controllers/post.controller');

router.get('/',auth,Postctrl.getAllPosts);
router.post('/',auth ,Postctrl.createPost);
router.get('/:id',auth ,Postctrl.findOnePost);
router.put('/:id',auth ,Postctrl.updatePost);
router.delete('/:id',auth ,Postctrl.deletePost);



module.exports = router;