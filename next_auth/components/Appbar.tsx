"use client"
import { useRouter } from "next/navigation"

import {signIn,signOut, useSession} from "next-auth/react"


export default function Appbar() {
    const router = useRouter()
    const session = useSession()
    return(
        <div>
            <button onClick={()=>{
                // router.push("/api/auth/signin") 
                signIn()
            }} >
                Signin
            </button>

            <button onClick={()=>{
                // router.push("/api/auth/signin") 
                signOut()
            }} >
                Signout
            </button>
            {JSON.stringify(session)}
        </div>
    )
}