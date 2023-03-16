import { useContext } from "react";
import { MyContext } from "../../context";
import Navbar from "../Navbar";
import Email from "../Email";
import Footer from "../Footer";

const PreSellingSingleItem = () => {

    const context = useContext(MyContext);
    const preSellingJSON = context.state.preSellingJSON;
    const divIndex = context.state.divIndex;
    const singleItem = preSellingJSON[divIndex]
    // const singleItem = preSellingJSON[1];

    const singleItemBackground = {
        backgroundImage: `url(${singleItem.bannerImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '90vh',
        width: '100%'
    };

    const bannerFeatures = singleItem.bannerFeatures.map((features, index) => (
        <li key={index}>{features}</li>
    ))

    const bannerAmenities = singleItem.bannerAmenities.map((amenities, index) => (
        <li key={index}>{amenities}</li>
    ))

    const galleryAmenities = singleItem.galleryAmenities.map((images, index) => (
        <img src={images} key={index} alt='Gallery' data-aos="fade-up" data-aos-duration="1000" />
    ))

    const galleryLobby = singleItem.galleryLobby.map((images, index) => (
        <img src={images} key={index} alt='Gallery' data-aos="fade-up" data-aos-duration="1000" />
    ))

    const galleryUnits = singleItem.galleryUnits.map((images, index) => (
        <img src={images} key={index} alt='Gallery' data-aos="fade-up" data-aos-duration="1000" />
    ))
    // console.log(singleItem.bannerImage)
    return (
        <>
            <Navbar />
            <div className='single-item-banner' style={{ ...singleItemBackground }} alt='Banner'>
                <div className='single-item-banner-container'>
                    <div data-aos="fade-up" data-aos-duration="1000">
                        <h3 className='font-weight-600 font-spacing text-justify text-line-height-12rem padding-left-2rem'>About</h3>
                        <p className='font-weight-300 font-spacing text-justify text-line-height-12rem text-center'>{singleItem.bannerAbout}</p>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="2000">
                        <ol>
                            <h3 className='font-weight-600 font-spacing text-justify text-line-height-12rem text-center'>{singleItem.bannerFeaturesHeading}</h3>
                            {bannerFeatures}
                        </ol>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="3000">
                        <ol>
                            <h3 className='font-weight-600 font-spacing text-justify text-line-height-12rem text-center'>{singleItem.bannerAmenitiesHeading}</h3>
                            {bannerAmenities}
                        </ol>
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className='text-filler margin-top-5rem'>
                    <p className='text-filler-title'>{singleItem.name}</p>
                    <h3>GALLERY</h3>
                </div>
                <div className='gallery margin-top-5rem'>
                    {galleryAmenities}
                </div>
                <div className='text-filler margin-top-5rem'>
                    <p className='text-filler-title'>Lobby</p>
                </div>
                <div className='gallery margin-top-5rem'>
                    {galleryLobby}
                </div>
                <div className='text-filler margin-top-5rem'>
                    <p className='text-filler-title'>Units</p>
                </div>
                <div className='gallery margin-top-5rem'>
                    {galleryUnits}
                </div>
                {/* <img src={singleItem.bannerImage} alt='bannerImage' /> */}
            </div>
            <Email />
            <Footer />
        </>

    )
}

export default PreSellingSingleItem;