import './newpage.scss';
import { Navbar } from '../../components/navbar/Navbar';
import { Sidebar } from '../../components/sidebar/Sidebar';
import DriveFolderUploadOutlined from "@mui/icons-material/DriveFolderUploadOutlined"
import { useState } from 'react';
import axios from "axios";
export const Newpage = ({inputs,title}) => {
  const [file,setfile] = useState("") ;
  const [info,setInfo] = useState({});
  const handleChange=(e)=>{
setInfo(prev=>({...prev,[e.target.id]:e.target.value}))
  }

  const handleClick=async (e)=>{
e.preventDefault() ; 
const data = new FormData()
data.append("file" , file)
data.append("upload_preset" , "upload")
try{
const uploadRes = await axios.post("https://api.cloudinary.com/v1_1/dstgi1llo/image/upload",data)
const {url} = uploadRes.data ; 
const newUser = {
  ...info,
  img:url
} ;

await axios.post("/auth/register",newUser)

}
catch(err){
  console.log(err);
}

  }
  return (
    <div className='new'>
      <Sidebar />
      <div className="newcontainer">
        <Navbar />
        <div className="top">
          <h1 >{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img src={file?URL.createObjectURL(file):"https://as2.ftcdn.net/v2/jpg/00/89/55/15/1000_F_89551596_LdHAZRwz3i4EM4J0NHNHy2hEUYDfXc0j.jpg"} alt="" className="img" />
          </div>
          <div className="right">
            <form>
              <div className="formInput">
                <label htmlFor='file'>Image: <DriveFolderUploadOutlined className='icon' /></label>
                <input type='file' id='file' style={{ display: "none" }} onChange={e=>setfile(e.target.files[0])}></input>
              </div>
              {inputs.map((input)=>(

<div className="formInput" key={input.id}>
<label>{input.label}</label>
<input onChange={handleChange} type={input.type} placeholder={input.placeholder} id={input.id}></input>
</div>
              ))}
             
             
           
                  <button onClick={handleClick}>Submit</button>
               
              
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
