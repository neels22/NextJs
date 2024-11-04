"use client"

export default function SignupComponent() {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <input 
          type="text" 
          placeholder="username" 
          className="mb-4 p-2 border border-gray-300 rounded w-64"
        />
        <input 
          type="text" 
          placeholder="email" 
          className="p-2 border border-gray-300 rounded w-64"
        />

        <button onClick={async () => {
            
            
        }}>

        </button>
      </div>
    );
  }
  