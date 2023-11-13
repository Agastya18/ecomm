
import Layout from '../components/Layout'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
const Register = () => {
    const [name,setName]= useState("")
    const [pass,setPass]= useState("")
    const [email,setEmail]= useState("")
    const [phone,setPhone]= useState("")
    const [address,setAddress]= useState("")
    const navigate=useNavigate()
    const handleSubmit=async(e)=>{
        e.preventDefault()  
        console.log(name,pass,email,phone,address)
        if(!name || !pass || !email || !phone || !address){
            alert('please fill all the fields')
            return
        }
        try {
            const res=  await axios.post('/api/v1/auth/register',{name,pass,email,phone,address})
           
            if(res.data.success){
            
                toast.success(res.data.message)
                navigate('/login')
            }else{
             
                toast.error(res.data.message)
            }
        } catch (error) {
          
          toast.error("An error occurred")
        }
        //api call

    }
  return (
   <Layout title={"register page"}>
     <div className=' h-[80vh] bg-gray-300 flex flex-col justify-center items-center'>
        <div className=' bg-white px-16 pt-8 pb-12 mb-4'>
              <h1 className=' text-3xl font-mono text-center'>Register user</h1>
              <form >
              <label  className=' block text-gray-600 mt-4'>Name: </label>
                <input  label="Name"
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                    className=' w-full p-2 border border-gray-300 rounded-md focus:outline-none '
                   
                />
                <label  className=' block text-gray-600 mt-4'>Email: </label>
                 <input  label="Email"
                    type="text"
                    id="email"
                   value={email}
                   onChange={(e)=>setEmail(e.target.value)}
                   className=' w-full p-2 border border-gray-300 rounded-md focus:outline-none '
                />
                <label  className=' block text-gray-600 mt-4'>Password: </label>
                 <input label="password"
                    type="password"
                    id="password"
                   value={pass}
                   onChange={(e)=>setPass(e.target.value)}
                   className=' w-full p-2 border border-gray-300 rounded-md focus:outline-none '
                />
                <label  className=' block text-gray-600 mt-4'>Phone: </label>
                 <input 
                    type="text"
                   
                   value={phone}
                   onChange={(e)=>setPhone(e.target.value)}
                   className=' w-full p-2 border border-gray-300 rounded-md focus:outline-none '
                />
                <label  className=' block text-gray-600 mt-4'>Address: </label>
                 <input 
                    type="text"
                   
                   value={address}
                   onChange={(e)=>setAddress(e.target.value)}
                   className=' w-full p-2 border border-gray-300 rounded-md focus:outline-none '
                />
                
                
                <button onClick={(e)=>handleSubmit(e)} className=' bg-green-600   rounded-md p-2 mt-3   w-full px-4'>signup</button>
                <p className=' inline-block'> Already have an account?</p>
                <Link to="/login" className=' text-blue-500 ml-2'>Login</Link>
              </form>
        </div>
    </div>
   </Layout>
  )
}

export default Register