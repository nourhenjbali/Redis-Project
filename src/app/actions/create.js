"use server";
// this is the file that connect with the redis database and interact with 
import { createClient } from "redis";
import { redirect } from "next/navigation";

export async function createBook(formData) {
  const client = createClient({
    password: "NpufnoY4KRXD9dAJOq3zJ15ckpuPOxUZ",
    socket: {
      host: "redis-11522.c278.us-east-1-4.ec2.cloud.redislabs.com",
      port: 11522,
    },
  });
  (async () => {
    try {
      // we should connect with the client to enable using the commands 
      await client.connect();
      console.log("Connected to Redis server");
    } catch (error) {
      console.error("Failed to connect to Redis server:", error);
    }
  })();
  const { title, rating, author, blurb } = Object.fromEntries(formData);
  // create id book
  const id = Math.floor(Math.random() * 100000);
  // create and save hash in the redis
  await client.hSet(`books:${id}`, {
    title,
    rating,
    author,
    blurb,
  });
  await client.hGet(books) ; 
  redirect("/");
}
