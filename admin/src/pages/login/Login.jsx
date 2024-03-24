import { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import './login.scss' ; 
// import { AuthContext } from '../../context/authContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
export const Login = () => {
    const [credential,setCredential] = useState({
        username:undefined,
        password:undefined
    })
    const {loading,error,dispatch} = useContext(AuthContext);
    const navigate = useNavigate()  ; 

    const handleChange = (e)=>{
        setCredential(prev=>({...prev,[e.target.id]:e.target.value}))
    };
    const handleValue=async(e)=>{
e.preventDefault()
dispatch({type:"LOGIN_START"});
try{
    const res = await axios.post("/auth/login" ,credential)
 
    // dispatch({type:"LOGIN_SUCCESS",payload:res.data.details})
    if(res.data.isAdmin)
    {console.log(res.data);
     
      dispatch({type:"LOGIN_SUCCESS",payload:res.data.details})
      navigate("/");
    }
    else{
      dispatch({type:"LOGIN_FAIL",payload:{message:"You are not allowed"}})}

    
}
catch(err)
{dispatch({type:"LOGIN_FAIL",payload:err.response.data})}
    }
  return (
    <div className='login'>
<div className="lContainer">
    <input type="text" className="lInput"  id='username' placeholder='Username' onChange={handleChange}/>
    <input type="password" className="lInput"  id='password' placeholder='password' onChange={handleChange}/>
    <button disabled={loading} className='lButton' onClick={handleValue}>Login</button>
    {
        error && <span>User not found</span>
    }
</div>

    </div>
  )
}

