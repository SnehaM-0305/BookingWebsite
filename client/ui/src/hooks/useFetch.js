import { useState, useEffect } from "react";
import axios from 'axios';


export const useFetch = (url)=>{
    // const url = "http://localhost:8000";
  const [data,setData] = useState([]);
  const [loading,setLoading] = useState(false);
  const [error,setError] = useState(false);
useEffect(()=>{
const fetchData=async ()=>{
setLoading(true);
try{
const res = await axios.get(url);

setData(res.data);
}
catch(err)

{

setError(err);
}
finally{setLoading(false);
}


  };
  fetchData() ;
},[url])



const refetchData = async()=>{
    setLoading(true);
    try{
    const res = await axios.get(url);
    setData(res.data);
    }
    catch(err)
    {
       
    setError(err);
    }
  finally{
    setLoading(false);
  }
    
      };

      return {data,loading,error,refetchData};
    };

