import { NextRequest } from "next/server";

import {PrismaClient} from "@prisma/client"

const client = new PrismaClient()

export function GET() {

    return Response.json({
        email:"nee@nae.com",
        name:"nel"
    })
    
}


export async function POST(req:NextRequest){


    // extract the body
    const body = await req.json()

    console.log(body)


    // store in the db

    await client.user.create({
        data:{
            username:body.username,
            password:body.password
        }
    })


    return Response.json({
        msg:"you are stored in db"
    })


}



