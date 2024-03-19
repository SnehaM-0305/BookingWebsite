import { Chart } from '../../components/chart/Chart';
import { Featured } from '../../components/featured/Featured';
import { Navbar } from '../../components/navbar/Navbar'
import { Sidebar } from '../../components/sidebar/Sidebar'
import { Tab } from '../../components/table/Tab';
import {Widget} from '../../components/widgets/widget';
import './home.scss'

export const Home = () => {
  return (
    <div className='home'>
  <Sidebar/>
  <div className="homeContainer"><Navbar/>
  <div className="widgets">
    <Widget type="user"/>
    <Widget type="order"/>
    <Widget type="earnings"/>
    <Widget type="balance"/>
    
    </div>
    <div className="charts">
      <Featured/>
      <Chart title="Last 6 Months (Revenue)" aspect={2/1}/>
    </div>
<div className="listContainer">
  <div className="listTitle">Latest</div>
  <Tab/>
</div>
    </div>
    </div>
  )
}
 