const router = require('express').Router();
const { generateQr } = require('../controllers/generator');

router.get('/', generateQr);

module.exports = router;