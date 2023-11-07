'use server'

 import { client } from "@/lib/db"
import { redirect } from 'next/navigation'

export async function createBook(formData) {
  const {title, rating, author, blurb} = Object.fromEntries(formData)
  // create id book
  const id = Math.floor(Math.random()*100000) ; 
  // create and save hash in the redis 

  await client.HSet(`books:${id}`,{
   title,
   rating,
   author,
   blurb,   
  })
  redirect("/");
}