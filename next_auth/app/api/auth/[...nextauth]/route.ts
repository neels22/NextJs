





import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
//
const handler = NextAuth({
    providers: [
        CredentialsProvider({
          name: 'Email',

          credentials: {
            username: { label: "Username", type: "text", placeholder: "Email" },
            password: { label: "Password", type: "password" },

          },


          async authorize(credentials:any) {

            console.log(credentials)
            // here comes database logic


             // to send errors to frontend return null 

            return{
                id:"user1",
                name:"indraneel",
                email:"neel@gmail.com"
            }
          }
        })
      ],

      secret: process.env.NEXTAUTH_SECRET



});

export const GET = handler;
export const POST = handler;

