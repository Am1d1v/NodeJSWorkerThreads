const factorial = require("./factorial");


const compute = (array) => {

    // Just random array for higher load
    const arr = [];
    for(let i = 0; i < 30000000; i++){
        arr.push(i * i);
    }

    // Factorial of every number in array
    return array.map(element => factorial(element));
}

const main = () => {
    performance.mark('Start');

    const result = [
        compute([25, 10, 19, 45]),
        compute([25, 10, 19, 45]),
        compute([25, 10, 19, 45])
    ];
    console.log(result);

    performance.mark('End');
    performance.measure('main', 'Start', 'End');

    // Get Performance Measurement
    console.log(performance.getEntriesByName('main').pop());
}
main();