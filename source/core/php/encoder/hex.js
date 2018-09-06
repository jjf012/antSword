'use strict';

module.exports = (pwd, data) => {
    data[pwd] = new Buffer(data['_']).toString('hex');
    delete data['_'];
    return data;
}