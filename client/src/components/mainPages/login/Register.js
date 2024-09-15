import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
const Register = () => {
  const[user,setUser] = useState({
    name :'',
    email:'',
    password:""
  })
  const onChangeInput =e=>{
    const{name,value} = e.target;
    setUser({...user,[name]:value})
  }

  const loginSubmit = async e=>{
    e.preventDefault()
    try{
      await axios.post('/user/register',{...user})

      localStorage.setItem('first login',true)

      window.location.href='/'
    }
    catch(err){
      alert(err.response.data.msg)
    }
  }

  return (
    <div className='register-page'>
      <form onSubmit={loginSubmit}>
      <input type='text' name='name' required placeholder='name' value={user.name} onChange={onChangeInput}/>
      <input type='email' name='email' required placeholder='email' value={user.email} onChange={onChangeInput}/>
      <input type='password' name='password' required placeholder='password' value={user.password} onChange={onChangeInput}/>
    <div className='row '>
      <button type='submit'>Register</button>
      <Link to='/login'>Login</Link>
    </div>
    </form>
    </div>
  )
}

export default Register