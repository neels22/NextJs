import axios from "axios";



async function getuserdetails() {
  const response = await axios.get("https://fakerapi.it/api/v2/addresses?_quantity=1")
  return response.data
}


// async component 
export default async function Home() {

  const userdetails = await getuserdetails();
   const userdetailsfinal =userdetails['data']
   console.log(userdetailsfinal[0])

  return (
   <div>
    hi there
    {/* {userdetailsfinal} */}
   </div>
  );
}
