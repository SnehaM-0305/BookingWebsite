import './newhotel.scss';
import { Navbar } from '../../components/navbar/Navbar';
import { Sidebar } from '../../components/sidebar/Sidebar';
import DriveFolderUploadOutlined from "@mui/icons-material/DriveFolderUploadOutlined"
import { useState } from 'react';
export const Newhotel = ({inputs,title}) => {
  const [files,setfiles] = useState("") ;
  const [info,setInfo] = useState({});
  const handleChange=(e)=>{
setInfo(prev=>({...prev,[e.target.id]:e.target.value}))
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
            <img src={files?URL.createObjectURL(files[0]):"https://as2.ftcdn.net/v2/jpg/00/89/55/15/1000_F_89551596_LdHAZRwz3i4EM4J0NHNHy2hEUYDfXc0j.jpg"} alt="" className="img" />
          </div>
          <div className="right">
            <form>
              <div className="formInput">
                <label htmlFor='file'>Image: <DriveFolderUploadOutlined className='icon' /></label>
                <input type='file' id='file' multiple style={{ display: "none" }} onChange={e=>setfiles(e.target.files)}></input>
              </div>
              {inputs.map((input)=>(

<div className="formInput" key={input.id}>
<label>{input.label}</label>
<input  id={input.id} onChange={handleChange} type={input.type} placeholder={input.placeholder}></input>
</div>
              ))}
             
             
           
                  <button>Submit</button>
               
              
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
