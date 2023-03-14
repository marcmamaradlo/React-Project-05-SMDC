import SMDCLogo from '../components/Home/smdcLogo.png';

const Navbar = () => {
    return (
        <div className='navbar-container'>
            <div className='navbar-content'>
                <div className='navbar-logo'>
                    <img src={SMDCLogo} alt='smdcLogo' />
                </div>
                <div className='navbar-links'>
                    <p>Home</p>
                    <p>Properties</p>
                    <p>Reserve Now</p>
                    <p>Contact Us</p>
                    <p>Call Us Now!</p>
                </div>
            </div>
        </div>
    )
}

export default Navbar;