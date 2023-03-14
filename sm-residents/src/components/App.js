import { MyProvider } from '../context';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

// import Navbar from "./Navbar";
// import Email from "./Email";
// import Banner from "./Home/Banner";
// import Footer from "./Footer";
// import HomeAirResidences from '../components/AirResidences/HomeAirResidences';
import PreSelling from './Pre-Selling/PreSelling';
// import Home from './Home/Home';


const App = () => {

    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <MyProvider>
            {/* <Navbar />
            <Banner />
            <Email />
            <Footer /> */}
            {/* <Home /> */}
            {/* <HomeAirResidences value={preSellingJSON} /> */}
            <PreSelling />
        </MyProvider>
    )
}

export default App;