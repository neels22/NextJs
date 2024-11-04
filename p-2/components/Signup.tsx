"use client"

import axios from "axios";
import { useState } from "react";

export default function SignupComponent() {

    const [ username,Setusername] = useState("")
    const [ password,Setpassword] = useState("")

    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <input 
          type="text" 
          placeholder="username" 
          className="mb-4 p-2 border border-gray-300 rounded w-64"
          onChange={(e)=>{
            Setusername(e.target.value)
          }
        }
        />
        <input 
          type="text" 
          placeholder="email" 
          className="p-2 border border-gray-300 rounded w-64"
          onChange={(e)=>{
            Setpassword(e.target.value)
          }
        }
        />

        <button onClick={async () => {
                axios.post("http://localhost:3000/api/user",{
                username,
                password 
            })
        }} className="border border-red-300 mt-3">
            Sign Up
        </button>
      </div>
    );
  }
  