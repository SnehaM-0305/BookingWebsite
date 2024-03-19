import './widget.scss'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
export const Widget = ({type}) => {
    let data;
    //temp data
    const amount=  100 ; 
    const perc = 20 ;
    switch(type){
        case "user":
            data={
                title:"USERS",isMoney:false,
                link:"See all Users",
                icon:(
                    <PersonOutlineIcon className='icon' style={{backgroundColor:'rgba(0,128,0,0.2)',color:'green'}}/>
                )
            }
            break;
            case "order":
            data={
                title:"ORDERS",isMoney:false,
                link:"View all orders",
                icon:(
                    <AddShoppingCartIcon className='icon' style={{backgroundColor:'rgba(0,128,0,0.2)',color:'green'}}/>
                )
            }
            break;
            case "earnings":
            data={
                title:"EARNING",isMoney:true,
                link:"See all Users",
                icon:(
                    <MonetizationOnIcon className='icon' style={{backgroundColor:'rgba(0,128,0,0.2)',color:'green'}}/>
                )
            }
            break;
            case "balance":
            data={
                title:"BALANCE",isMoney:true,
                link:"See balance",
                icon:(
                    <AccountBalanceIcon className='icon' style={{backgroundColor:'rgba(0,128,0,0.2)',color:'green'}}/>
                )
            }
            break;
            default:
                break;

    }
  return (
    <div className='widget'>
        <div className="left">
            <span className="title">{data.title}</span>
            <span className="counter">{data.isMoney && "$"}{amount}</span>
            <span className="link">Link</span>
        </div>
        <div className="right">
            <div className="percent positive">
              <KeyboardArrowUpIcon/>  
                {data.link}%</div>
{data.icon}
        </div>
    </div>
  )
}
