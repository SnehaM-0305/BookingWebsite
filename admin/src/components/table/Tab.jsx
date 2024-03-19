import './table.scss';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
export const Tab = () => {
    const rows=[
        {id:1 , product:"Acer LAptop" , img:"https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",customer:"John Doe" , date:"1 MArch" , amount:890 , 
    method:"COD" , status:"Approved"},
    {id:2 , product:"Acer LAptop" , img:"https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",customer:"John Doe" , date:"1 MArch" , amount:890 , 
    method:"COD" , status:"Approved"},
    {id:3 , product:"Acer LAptop" , img:"https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",customer:"John Doe" , date:"1 MArch" , amount:890 , 
    method:"COD" , status:"Approved"},
    {id:4 , product:"Acer LAptop" , img:"https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",customer:"John Doe" , date:"1 MArch" , amount:890 , 
    method:"COD" , status:"Approved"},
    {id:5 , product:"Acer LAptop" , img:"https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",customer:"John Doe" , date:"1 MArch" , amount:890 , 
    method:"COD" , status:"Approved"},
    {id:6 , product:"Acer LAptop" , img:"https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",customer:"John Doe" , date:"1 MArch" , amount:890 , 
    method:"COD" , status:"Approved"},
    {id:7 , product:"Acer LAptop" , img:"https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",customer:"John Doe" , date:"1 MArch" , amount:890 , 
    method:"COD" , status:"Approved"},
    {id:8 , product:"Acer LAptop" , img:"https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",customer:"John Doe" , date:"1 MArch" , amount:890 , 
    method:"COD" , status:"Approved"},
    {id:9 , product:"Acer LAptop" , img:"https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",customer:"John Doe" , date:"1 MArch" , amount:890 , 
    method:"COD" , status:"Approved"},

    ]
  return (
    <TableContainer component={Paper} className='table'>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
           <TableCell className='tableCell'>Tracking ID</TableCell>
           <TableCell className='tableCell'>Product</TableCell>
           <TableCell className='tableCell'>Customer</TableCell>
           <TableCell className='tableCell'>Date</TableCell>
           <TableCell className='tableCell'>Amount</TableCell>
           <TableCell className='tableCell'>Payment Method</TableCell>
           <TableCell className='tableCell'>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
             
            >
              <TableCell >
               <div className='tableCell'>{row.id}</div> 
              </TableCell>
              <TableCell  className='tableCell'>
                <div className="cellWrapper">
                    <img src={row.img} alt="" className="image" />
                    {row.product}
                </div>
              </TableCell>
              <TableCell className='tableCell'>{row.customer}</TableCell>
              <TableCell className='tableCell'>{row.date}</TableCell>
              <TableCell className='tableCell'>{row.amount}</TableCell>
              <TableCell className='tableCell'>{row.method}</TableCell>
              <TableCell className='tableCell'><span className={`status ${row.status}`}>{row.status}</span></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
