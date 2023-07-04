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
        return res.status(400).json({ isValid: true, message: 'Email is invalid', email: email, username: null, subdomain: null, domain: null, tld: null });
    }

    Logger.log(filename, 'Email is valid');

    let address = email.split('@')[1];
    Logger.log(filename, `Email domain: ${address}`);
    const { username, subdomain, domain, tld } = parseEmail(email);

    return res.status(200).json({ isValid: true, message: 'Email is valid', email: email, username: username, subdomain: subdomain, domain: domain, tld: tld });
};

// sub.domain.tld

const parseEmail = (email) =>
{
    let username = email.split('@')[0];
    Logger.log(filename, `Username: ${username}`);

    let address = email.split('@')[1];
    Logger.log(filename, `Address: ${address}`);

    let domain = address.split('.').slice(-2, -1)[0];
    Logger.log(filename, `Domain: ${domain}`);

    let tld = address.split('.').slice(-1)[0];
    Logger.log(filename, `TLD: ${tld}`);

    let subdomain = null;
    if(address.split('.').length > 2)
    {
        subdomain = address.split('.').slice(-3, -2)[0];
    }
    Logger.log(filename, `Subdomain: ${subdomain}`);
    
    return { username: username, subdomain: subdomain, domain: domain, tld: tld };
};

module.exports = { validateEmail };

