import { createClient } from "redis";


client
  .ping()
  .then(() => {
    console.log("Connected to Redis server");
  })
  .catch((error) => {
    console.error("Failed to connect to Redis server:", error);
  });
console.log("here client", client);
client.on("error", () => {
  console.log("erreur");
});
export default client;
