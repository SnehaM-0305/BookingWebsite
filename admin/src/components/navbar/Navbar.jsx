import './navbar.scss'
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ListIcon from '@mui/icons-material/List';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import { useContext } from 'react';
import { DarkModeContext } from '../../context/darkModeContext';
export const Navbar = () => {
  const {dispatch} = useContext(DarkModeContext);
  return (
    <div className='navbar'>
      <div className="wrapper">
        <div className="search">
          <input type="text" name="" id=""  placeholder='Search'/>
          <SearchIcon/>
        </div>
        <div className="items">
          <div className="item">
            <LanguageIcon className='icon'/>
            English
          </div>
          <div className="item">
            <DarkModeIcon className='icon' onClick={()=>dispatch({type:"TOGGLE"})} />
          </div>
          <div className="item">
            <FullscreenExitIcon className='ic on'/>
          </div>
          <div className="item">
            <NotificationsNoneIcon className='icon'/>
            <div className="counter">1</div>
          </div>
          <div className="item">
            <ChatBubbleIcon className='icon'/>
            <div className="counter">1</div>
          </div>
          <div className="item">
            <ListIcon className='icon'/>
          </div> <div className="item">
          <img src='https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' className='avatar'></img>
          </div>

      




        </div>
    </div>
    </div>
  )
}
