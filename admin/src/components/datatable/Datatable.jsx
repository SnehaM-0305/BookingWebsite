import './datatable.scss' 
import { DataGrid } from '@mui/x-data-grid';
import { userColumns , userRows } from '../../datatablesource';
import { Link } from 'react-router-dom';
import { useState } from 'react';

  
   
export const Datatable = () => {
 const [data,setData] = useState(userRows)
 const handleDelete = (id)=>{
  const updatedData = data.filter(item => item.id !== id);
  setData(updatedData);
  
 }
const actionColumn=[
{field:"action" , headerName:"Action" , width:200,renderCell:(params)=>{
  return(
    <div className='cellAction'>
     <Link to="/users/test" style={{textDecoration:"none"}}><div className='viewButton' >View</div></Link> 
      <div className='deleteButton' onClick={()=>handleDelete(params.row.id)}>Delete</div>
    </div>
  )
}}
]
  return (
  
    <div className='datatable'>
      <div className="dataTableTitle">
    Add New User <Link to='/users/new'  className='addNewUser'>Add New</Link>
    </div>
         <DataGrid
         className='grid'
        rows={data}
        columns={userColumns.concat(actionColumn)}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
    
  )
}
