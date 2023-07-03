const Logger = require('../utils/logger');

const filename = 'email.js';

const validateEmail = async (req, res) => 
{
    const { email } = req.body;

    if (!email)
    {
        Logger.error(filename, 'Email is required');
        return res.status(400).json({ error: 'Email is required' });
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email))
    {
        Logger.error(filename, 'Email is invalid');
        return res.status(400).json({ isValid: true, message: 'Email is invalid' });
    }

    Logger.log(filename, 'Email is valid');

    
    return res.status(200).json({ isValid: true, message: 'Email is valid' });
};

