import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function SignUp() {
  const [formData,setFormData]=useState({});
  const [error,setError]=useState(null);
  const [success,setSuccess]=useState(null);
  const [loading,setLoading]=useState(false);
  const navigate=useNavigate();
  const handleChange=(e)=>{
    setFormData({
      ...formData,
      [e.target.id]:e.target.value
    })

  }
 // console.log(formData)

  const handleSubmit=async (e)=>{
    setLoading(true)
    
  
     e.preventDefault();
     const res= await fetch('/api/auth/signup',
     {
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(formData)
     });
     const data=await res.json()
     console.log(data)
     if(data.success==false){
      ///data here comes from middleware
      //as middleware takeover the response
       setLoading(false)
       setSuccess(false)
       setError(data.message)
    
       return;
     }
    
     setLoading(false)
     setSuccess(data)
     ///data here comes from fetchAPI result
     ///as response come directly from fetchAPI
    /// setError(data)
    
  }
  return (
    <div className='p-3 max-w-lg mx-auto'>
          <h1 className='text-3xl text-center font-semibold my-7'>
            Sign Up </h1>
            <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
              <input type="text" placeholder='Username' id="username"
              className='border p-3 rounded-lg' onChange={handleChange}/>
              <input type="email" placeholder='Email' id="email"
              className='border p-3 rounded-lg' onChange={handleChange}/>

               <input type="password" placeholder='Password' id="password"
              className='border p-3 rounded-lg' onChange={handleChange}/>
              <button disabled={loading} className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80" >
                {loading? 'loading...':'SignUp'}
              </button>
             
            </form>
            <div className='flext gap-2 mt-5'>
            <p>Have an account?</p>
            <Link to={"/sign-in"}>
              <span className='text-blue-700'>Sign In</span>
            </Link>
            </div>
           
            {success ? <p className='text-green-900'>{success}</p>:<p className='text-red-700'>{error}</p>}
            
           
          
            
           
    </div>
  )
}
