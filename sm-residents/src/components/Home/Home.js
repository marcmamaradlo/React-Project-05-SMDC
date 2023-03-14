import { useContext } from "react";
import { MyContext } from "../../context";
import Navbar from "../Navbar";
import Banner from "./Banner";
import PropertiesPreview from "./PropertiesPreview";
import Email from "../Email";
import Footer from "../Footer";

const Home = () => {

    const context = useContext(MyContext);

    // const preSellingJSON = context.preSellingJSON;
    const handleButtonClick = context.handleButtonClick;
    return (
        <>
            <Navbar />
            <Banner />
            <div className='container'>
                <div className='text-filler'>
                    <p className='text-filler-title'>Best Selling Properties</p>
                    <p className='text-filler-info'>Properties of SM Development Corporation are strategically situated in key areas across Metro Manila specifically the cities of Makati,
                        Mandaluyong, Manila, Paranaque, Las Pinas, Pasay, Pasig, Quezon City, and Taguig, as well as Tagaytay City.</p>
                </div>
            </div>
            <PropertiesPreview />
            <div className='button-view-more-properties container' data-aos="fade-up" data-aos-duration="1000">
                <button onClick={handleButtonClick}>VIEW MORE PROPERTIES</button>
            </div>
            <Email />
            <Footer />
        </>
    )
}

export default Home;