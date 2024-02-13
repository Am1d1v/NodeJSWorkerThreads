const factorial = require("./factorial");
const {Worker} = require('worker_threads');

const compute = (array) => {

    return new Promise((resolve, reject) => {
        const worker = new Worker('./worker.js', {
            workerData: {
                array
            }
        });

        worker.on('message', (msg) => {
            console.log(worker.threadId);
            resolve(msg);
        });

        worker.on('error', (err) => {
            reject(err);
        });

        worker.on('exit', () => {
            console.log('Done')
        });
    });

    
}

const main = async() => {

    try {
        performance.mark('Start');
        const result = await Promise.all([
            compute([25, 10, 19, 45]),
            compute([25, 10, 19, 45]),
            compute([25, 10, 19, 45])
        ]);
        console.log(result);
    
        performance.mark('End');
        performance.measure('main', 'Start', 'End');
    
        // Get Performance Measurement
        console.log(performance.getEntriesByName('main').pop());
    } catch (error) {
        console.log(error.message);
    }

}
main();