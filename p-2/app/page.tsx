import axios from "axios";
import { NextRequest } from "next/server";

import {PrismaClient} from "@prisma/client"
import { emitWarning } from "process";

const client = new PrismaClient()

async function fetchdetails() {
  

  const user = await client.user.findFirst();

  return {
    email:user?.username
    name:"neel"
  }
}







async function getuserdetails() {
  try {
    const response = await axios.get("http://localhost:3000/api/user");
    return response.data;
  } catch (error) {
    console.error("Error fetching user details:");
  }
}



// async component 
export default async function Home() {

  const userdetails = await getuserdetails();


  return (
   <div>
    hi there
    {userdetails?.email}
    {userdetails?.name}
   </div>
  );
}
