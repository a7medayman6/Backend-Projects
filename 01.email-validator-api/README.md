# Email Validator API

## Project Description

You are tasked with building a simple email validator API. The API should receive an email address and respond with whether the email address is valid or not, as well as additional details about the email address such as the domain name and path (if available). For this task, you'll be using Node.js and Express.js.

## Requirements

1. The API should be built using Node.js and Express.js.
2. The API should have a single endpoint that accepts a POST request with an email address.
3. The API should validate the email address and respond with a JSON object containing the following fields:
    - `isValid`: a boolean value indicating whether the email address is valid or not.
    - `domain`: the domain name of the email address (if available).
    - `path`: the path component of the email address (if available).
4. The API should handle errors gracefully and respond with appropriate HTTP status codes and error messages.

## API Endpoints

| Endpoint | Method | Request Body | Response Body | Response Status Code | Description |
| --- | --- | --- | --- | --- | --- |
| /validate | POST | {"email": "username@sub.domain.tld"} | ```{ "isValid": true, "message": "Email is valid", "email": "username@sub.domain.tld", "username": "username", "subdomain": "sub", "domain": "domain", "tld": "tld" }``` Or ```{ "isValid": true, "message": "Email is invalid", "email": "wrong.domain.tld", "username": null, "subdomain": null, "domain": null, "tld": null }``` | `200` or `400` | Validates the email address and responds with a JSON object containing details about the email address. | 




