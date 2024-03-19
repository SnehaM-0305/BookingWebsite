import './maillist.css'

export const Maillist = () => {
  return (
    <div className='mail'>
<h1 className="mailTitle">Save Time Save Money</h1>
<span className="mailDesc">Sign up and we will send the best deals for you</span>
<div className="mailInputContainer">
    <input type='text' placeholder='Email'></input>
    <button>Subscribe</button>

</div>

    </div>
  )
}
