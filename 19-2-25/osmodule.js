const os = require('os');


console.log(`Operating System: ${os.platform()}`);


console.log(`Architecture: ${os.arch()}`);

console.log(`Total Memory: ${os.totalmem() / (1024 ** 3)} GB`);


console.log(`Free Memory: ${os.freemem() / (1024 ** 3)} GB`);


console.log(`Home Directory: ${os.homedir()}`);

console.log(`System Uptime: ${os.uptime()} seconds`);


console.log('CPU Details:');
os.cpus().forEach((cpu, index) => {
  console.log(`CPU ${index + 1}: Model - ${cpu.model}, Speed - ${cpu.speed} MHz`);
});


const networkInterfaces = os.networkInterfaces();
console.log('Network Interfaces:');
for (let interfaceName in networkInterfaces) {
  networkInterfaces[interfaceName].forEach(network => {
    console.log(`${interfaceName}: ${network.address} (Family: ${network.family}, Internal: ${network.internal})`);
  });
}


console.log(`Temporary Directory: ${os.tmpdir()}`);


console.log(`Hostname: ${os.hostname()}`);
