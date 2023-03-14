import Navbar from '../Navbar';
import Banner from '../Home/Banner';
import Email from '../Email';
import Footer from '../Footer';
import { useContext } from 'react';
import { MyContext } from '../../context';

const AirResidences = () => {
    const context = useContext(MyContext);
    const preSellingJSON = context.state.preSellingJSON;

    const item = preSellingJSON.map((items, i) => (
        <div className='container' key={i} >
            <div>
                <h3>{items.name}</h3>
                <p>{items.status}</p>
                <p>{items.bannerAbout}</p>
                {/* <img src={items.bannerImage} alt='someImg' /> */}
                <ul>
                    <p>Amenities</p>
                    {items.bannerAmenities.map((amenities, j) => (
                        <li key={j}>{amenities}</li>
                    ))}
                </ul>
                <ul>
                    <p>Features</p>
                    {items.bannerFeatures.map((features, k) => (
                        <li key={k}>{features}</li>
                    ))}
                </ul>
            </div>
        </div>
    ))


    return (
        <>
            <Navbar />
            <Banner />
            <Email />
            {item}
            <Footer />
        </>
    )
}

export default AirResidences;