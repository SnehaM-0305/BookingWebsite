import './datatable.scss' 
import { DataGrid } from '@mui/x-data-grid';
import { userColumns , userRows } from '../../datatablesource';
import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import {useFetch} from "../../hooks/useFetch";
import axios from 'axios';
  
   
export const Datatable = ({columns}) => {

  const location  = useLocation(); 
const path = location.pathname.split("/")[1] ; 
  
const {data,loading,error} = useFetch(`/${path}`) ; 
const [list,setList] = useState(data);

useEffect(()=>{
setList(data)
},[data])

 const handleDelete = async(id)=>{
  try{
await axios.delete(`/${path}/${id}`)
const updatedData = list.filter(item => item._id !== id);
setList(updatedData);

  }catch(err){}

  
 }
const actionColumn=[
{field:"action" , headerName:"Action" , width:200,renderCell:(params)=>{
  return(
    <div className='cellAction'>
     <Link to={`/${path}/new`} style={{textDecoration:"none"}}><div className='viewButton' >View</div></Link> 
      <div className='deleteButton' onClick={()=>handleDelete(params.row._id)}>Delete</div>
    </div>
  )
}}
]
if (!columns) {
  // Render a placeholder or loading state if columns are undefined
  return <div>Loading...</div>;
}
  return (
  
    <div className='datatable'>
      <div className="dataTableTitle">
    Add New User <Link to={`/${path}/new`} className='addNewUser'>Add New</Link>
    </div>
         <DataGrid
         className='grid'
        rows={list}
        columns={columns.concat(actionColumn)}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        getRowId={row=>row._id}
      />
    </div>
    
  )
}
