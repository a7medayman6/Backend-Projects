const QRCode = require('qrcode');

const Logger = require('../utils/logger');

const filename = 'email.js';

const generateQr = async (req, res) => 
{

    const data = req.query.data

    QRCode.toDataURL(data, (err, url) => 
    {
        if(err) 
        {
            Logger.err(err)
            return res.status(500).json({ error: `Error Trying to generate QR Code: ${err}` })
        }
        
        Logger.log(`Data URL: ${url}`)
        return res.status(200).json({ qrcode: `${url}` })
    })



};

module.exports = { generateQr };

