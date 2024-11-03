import axios from "axios";


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
