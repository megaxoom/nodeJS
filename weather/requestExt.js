const request = require('request');


var requestA = (uri) => {
    return new Promise((resolve, reject) => {
        request({
            url: uri,
            json: true
        }, (error, response, body) => {
            if (error)
                reject(error);
            else 
                resolve(body);
        })});
};

module.exports.request = requestA;