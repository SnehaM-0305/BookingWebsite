import './featured.scss';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { CircularProgressbar } from 'react-circular-progressbar';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import 'react-circular-progressbar/dist/styles.css';
export const Featured = () => {
    return (
        <div className='featured'>
            <div className="top">
                <h1 className='title'>Total Revenue</h1>
                <MoreVertIcon fontSize='small' />
            </div>
            <div className="bottom">
                <div className="featuredChart">
                    <CircularProgressbar value={70} text='70%' strokeWidth={4} />
                </div>
                <p className="title">Total Sales made today</p>
                <p className="amount">$345</p>
                <p className="desc">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit, vel?</p>
                <div className="summary">
                    <div className="item">
                        <div className="itemTitle">Target</div>
                  <div className="itemResult">
                    <KeyboardArrowDownIcon fontSize='small'/>
                    <div className="resultAmount">$12K</div>
                  </div>
                    </div>
                    <div className="item">
                        <div className="itemTitle">Last Week</div>
                  <div className="itemResult">
                    <KeyboardArrowDownIcon fontSize='small'/>
                    <div className="resultAmount">$12K</div>
                  </div>
                    </div>
                    <div className="item">
                        <div className="itemTitle">Month</div>
                  <div className="itemResult positive">
                    <KeyboardArrowUpIcon fontSize='small'/>
                    <div className="resultAmount">$12K</div>
                  </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
