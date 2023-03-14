const Email = () => {
    return (
        <div className='container'>
            <div className='email-container'>
                <div className='text-filler'>
                    <p className='text-filler-title'>Contact Us</p>
                    <p className='text-filler-info'>If you are considering SMDC or just want more information, we're happy to answer all your questions.
                        Simply fill out the form below and we will reach out soon.</p>
                </div>
                <div className='contact-and-input-container' data-aos="fade-up" data-aos-duration="1000">
                    <div className='contact'>
                        <div className='contact-title'>
                            <p className='font-lato font-size-15rem'>Contact Informations</p>
                        </div>
                        <div className='contact-div'>
                            <div className='contact-info'>
                                <i className="fa-regular fa-envelope contact-icon"></i>
                                <p className=''>Email:</p>
                                <p className=''>someemail@yehey.com</p>
                            </div>
                            <div className='contact-info'>
                                <i className="fa-solid fa-mobile-screen contact-icon"></i>
                                <p className=''>Mobile No:</p>
                                <p className=''>+6397896543210</p>
                            </div>
                            <div className='contact-info'>
                                <i className="fa-brands fa-viber contact-icon"></i>
                                <p className=''>Viber:</p>
                                <p className=''>+6397896543210</p>
                            </div>
                            <div className='contact-info'>
                                <i className="fa-brands fa-whatsapp contact-icon"></i>
                                <p className=''>WhatsApp:</p>
                                <p className=''>+6397896543210</p>
                            </div>
                            <div className='contact-info'>
                                <i className="fa-brands fa-facebook-f contact-icon"></i>
                                <p className=''>Facebook:</p>
                                <p className=''>https:\\linkToFacebook.com</p>
                            </div>
                        </div>
                    </div>
                    <div className='input'>
                        <div className='input-container'>
                            <div>
                                <input type='text' placeholder='Name' />
                            </div>
                            <div>
                                <input type='text' placeholder='Email' />
                            </div>
                            <div>
                                <input type='text' placeholder='Contact No.' />
                            </div>
                            <div>
                                <input type='textbox' placeholder='Message' />
                            </div>
                            <div>
                                <button type='submit'>SEND MESSAGE</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Email;