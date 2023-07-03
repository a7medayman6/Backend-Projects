const router = require('express').Router();
const { validateEmail } = require('../controllers/email');

router.post('/validate', validateEmail);

module.exports = router;