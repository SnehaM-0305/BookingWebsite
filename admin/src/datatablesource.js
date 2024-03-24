import { DataGrid } from '@mui/x-data-grid';

export const userColumns = [
    { 
        field: "id", 
        headerName: "ID", 
        width: 70 
    },
    { 
        field: "username", 
        headerName: "USER", 
        width: 230,  
        renderCell: (params) => {
        
            return (
                <div className="cellwithImage">
                    <img className="cellImage" src={params.row.img||"https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=1024x1024&w=is&k=20&c=6XEZlH2FjqdpXUqjUK4y0LlWF6yViZVWn9HZJ-IR8gU="}  alt="avatar" />
                    {params.row.username}
                </div>
            )
        }
    },
    {
        field:"email" , 
        headerName:"Email" , 
        width:230
    },
    {
      field:"age" , 
      headerName:"Age" , 
      width:100  
    } ,
    {
        field:"country" , 
        headerName:"Country" , 
        width:100  
      } ,
      {
        field:"city" , 
        headerName:"City" , 
        width:100  
      } ,
      {
        field:"phone" , 
        headerName:"Phone" , 
        width:100  
      } ,
 

];

export const hotelColumns = [
  { 
      field: "_id", 
      headerName: "ID", 
      width: 250 
  },
  { 
      field: "name", 
      headerName: "Name", 
      width: 270,  
      
  },
  {
    field:"type" , 
    headerName:"Type" , 
    width:230
},
  {
      field:"desc" , 
      headerName:"Description" , 
      width:230
  },
  {
    field:"cheapestPrice" , 
    headerName:"Cheapest Price" , 
    width:100  
  } ,
 
    {
      field:"city" , 
      headerName:"City" , 
      width:230
  },
 

];
export const roomsColumns = [
  { 
      field: "id", 
      headerName: "ID", 
      width: 70 
  },
  { 
      field: "title", 
      headerName: "Title", 
      width: 230,  
     
      
  },

  {
      field:"desc" , 
      headerName:"Description" , 
      width:230
  },
  {
    field:"price" , 
    headerName:"Price" , 
    width:100  
  } ,
  {
      field:"maxPeople" , 
      headerName:"Max People" , 
      width:100  
    } ,
  
 

];
