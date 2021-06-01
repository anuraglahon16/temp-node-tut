const os = require('os')


//info about currentv user
const user = os.userInfo()
console.log(user);

// method returns the system in secs

console.log(`the system uptime is ${os.uptime()} seconds`)

const currentOS ={
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem(),
}

console.log(currentOS)
