import { createClient } from 'redis';

const client = createClient({
    password: 'NpufnoY4KRXD9dAJOq3zJ15ckpuPOxUZ',
    socket: {
        host: 'redis-11522.c278.us-east-1-4.ec2.cloud.redislabs.com',
        port: 11522
    }
});
client.on("error" , (err)=>{ 
    console.log(err) ; 
}) 
if (client.isOpen){
    client.connect();
} 
export { client} ; 
