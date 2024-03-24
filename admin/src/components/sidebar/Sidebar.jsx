import './sidebar.scss';
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupIcon from '@mui/icons-material/Group';
import CategoryIcon from '@mui/icons-material/Category';
import BookmarkBorderTwoToneIcon from '@mui/icons-material/BookmarkBorderTwoTone';
import LocalShippingTwoToneIcon from '@mui/icons-material/LocalShippingTwoTone';
import QueryStatsTwoToneIcon from '@mui/icons-material/QueryStatsTwoTone';
import NotificationsNoneTwoToneIcon from '@mui/icons-material/NotificationsNoneTwoTone';
import SettingsSystemDaydreamTwoToneIcon from '@mui/icons-material/SettingsSystemDaydreamTwoTone';
import AddToQueueIcon from '@mui/icons-material/AddToQueue';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import Person2Icon from '@mui/icons-material/Person2';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { DarkModeContext } from '../../context/darkModeContext';


export const Sidebar = () => {
    const { dispatch } = useContext(DarkModeContext);
    return (
        <div className='sidebar'>

            <div className="top"><Link to='/' style={{ textDecoration: "none" }}><span className="logo">SnehaAdmin</span></Link></div>
            <hr></hr>
            <div className="center">
                <ul>
                    <p className="title">MAIN</p>
                    <li>
                        <DashboardIcon className='icon' /><Link to='/' style={{ textDecoration: "none" }}><span>Dashboard</span></Link></li>
                    <p className="title">LISTS</p>
                    <li><GroupIcon className='icon' /><Link to="/users" style={{ textDecoration: "none" }}><span>Users</span></Link></li>
                    <li><CategoryIcon className='icon' /><Link to='/hotels' style={{ textDecoration: "none" }}><span>Hotels</span></Link></li>
                    <li><BookmarkBorderTwoToneIcon className='icon' /><Link to="/rooms" style={{textDecoration:"none"}} ><span>Rooms</span></Link></li>
                    <li><LocalShippingTwoToneIcon className='icon' /><span>Deliver</span></li>
                    <p className="title">USEFULL LINKS</p>
                    <li><QueryStatsTwoToneIcon className='icon' /><span>Stats</span></li>
                    <li><NotificationsNoneTwoToneIcon className='icon' /><span>Notifications</span></li>
                    <p className="title">Services</p>
                    <li><SettingsSystemDaydreamTwoToneIcon className='icon' /><span>System Health</span></li>
                    <li><AddToQueueIcon className='icon' /><span>Logs</span></li>
                    <li><SettingsApplicationsIcon className='icon' /><span>Settings</span></li>
                    <p className="title">USER</p>
                    <li><Person2Icon className='icon' /><span>Profile</span></li>
                    <li><LogoutIcon className='icon' /><span>Log out</span></li>
                </ul>
            </div>
            <div className="bottom">
                <div className="colorOption" onClick={() => dispatch({ type: "DARK" })}></div>
                <div className="colorOption" onClick={() => dispatch({ type: "LIGHT" })}></div>

            </div>
        </div>
    )
}
