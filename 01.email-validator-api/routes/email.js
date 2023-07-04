const router = require('express').Router();
const { validateEmail } = require('../controllers/email');

router.post('/', validateEmail);

module.exports = router;