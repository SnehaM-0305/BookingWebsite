import './home.css';
import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/header/Header';
import Featured from '../../components/featured/Featured';
import PropertyList from '../../components/propertyList/Property';
import { FeaturedProperty } from '../../components/featuredProperty/FeaturedProperty';
import { Maillist } from '../../components/mailList/Maillist';
import { Footer } from '../../components/footer/Footer';
const Home = ()=>{
    return (
        <div>
            <Navbar/>
            <Header/>
            <div className="homeContainer">
               <Featured />
               <h1 className="homeTitle">Browse By property name</h1>
               <PropertyList/>
               <h1 className="homeTitle">Homes guest Love</h1>
               <FeaturedProperty/>
               <Maillist/>
               <Footer/>
            </div>
            
            </div>
    )
}
export default Home ; 