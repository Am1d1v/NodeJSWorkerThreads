const {parentPort, workerData} = require('worker_threads');
const factorial = require('./factorial');

const compute = ({array}) => {

    // Just random array for higher load
    const arr = [];
    for(let i = 0; i < 30000000; i++){
        arr.push(i * i);
    }

    // Factorial of every number in array
    return array.map(element => factorial(element));
};

parentPort.postMessage(compute(workerData))