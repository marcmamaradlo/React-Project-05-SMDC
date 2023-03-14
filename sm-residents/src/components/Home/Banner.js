import smdcLogo from '../Home/smdcLogo.png';
import someLogo from '../Home/someLogo.png';

const Banner = () => {
    return (
        <div className='container-banner'>
            <div className='banner-container'>
                <div className='banner-info' data-aos="fade-up" data-aos-duration="1000">
                    <div className='banner-info-image'>
                        <img src={smdcLogo} alt='smdc-logo' />
                        <img src={someLogo} alt='some-logo' />
                    </div>
                    <div className='banner-info-details'>
                        <p className='font-lato font-wieght-600'>For as low as</p>
                        <p className='font-green font-size-25rem font-montserrat'>Php 20,000 / month</p>
                        <p className='font-raleway font-wieght-600 font-justify'>SMDC’s ICE Tower, a modern residential-office development that provides the luxury and comforts of a premium condominium development suited for the entrepreneurial lifestyle.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner;