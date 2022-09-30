var numeros = require('./numeros');
const Logger = require('logplease');
const logger = Logger.create('utils');

var nums = [2, 3, 101, 201, 202, 100];

nums.forEach(element => {
    if(numeros.numPar(element)){
        logger.info(`El número ${element} es par`);
    }else{
        logger.error(`El número ${element} no es par`);
    }
});
