import './single.scss'
import {Sidebar} from '../../components/sidebar/Sidebar' ; 
import {Navbar} from '../../components/navbar/Navbar';
import {Chart} from '../../components/chart/Chart';
import {Tab} from '../../components/table/Tab' ; 
export const Single = () => {
  return (
    <div className='Single'>
     <Sidebar/>
      <div className="singleContainer">
      <Navbar/>

      <div className="top">
        <div className="left">
          <div className="editButton">Edit</div>
          <h1 className='title'>Information</h1>
          <div className="item">
            <img src="https://assets-global.website-files.com/619e8d2e8bd4838a9340a810/64c590c754d6bc13ebd90cbc_ai_product_photo_styles-p-1080.webp" alt="" className="itemImage" />
           <div className="details">
            <h1 className="itemTitle">Jane Doe</h1>
            <div className="detailItem">
              <span className="itemKey">Email:</span>
              <span className="itemValue">janedoe@gmail.com</span>
            </div>
            <div className="detailItem">
              <span className="itemKey">Phone:</span>
              <span className="itemValue">78965412</span>
            </div>
            <div className="detailItem">
              <span className="itemKey">Address:</span>
              <span className="itemValue">House street</span>
            </div>
            <div className="detailItem">
              <span className="itemKey">Country:</span>
              <span className="itemValue">Cursor</span>
            </div>
            
           </div>
          </div>
        </div>
        <div className="right">
          <Chart aspect={3 / 1} title="User Spending(Last 6 month)"/>
        </div>
      </div>
      <div className="bottom">
      <h1 className='title'>Last Transactions</h1>

        <Tab/>
      </div>
      </div>
     
    </div>
  )
}
