import './AboutUs.css'

const AboutUs = (props) => {
    return (
        <div className="about">
            <div className="about-left">
            <h1>About Us</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vel aliquet tortor ut sit sit. Velit imperdiet integer elementum a scelerisque pulvinar venenatis sodales. Quis nulla euismod feugiat at interdum in. Venenatis arcu semper lectus quis sit in rhoncus auctor.</p>
            <div className="about-info">
                <div className="info">
                    <p className='bigSize'>150</p>
                    <p className='smallSize'>Vehicle In Stock</p>
                </div>
                <div className="info">
                    <p className='bigSize'>40</p>
                    <p className='smallSize'>Sold Car</p>
                </div>
                <div className="info">
                    <p className='bigSize'>38</p>
                    <p className='smallSize'>Happy Customer</p>
                </div>
                <div className="info">
                    <p className='bigSize'>5</p>
                    <p className='smallSize'>Awards</p>
                </div>
            </div>

            </div>
            <div className="about-right">
                <img src={props.imgAbout}/>
            </div>


        </div>
    )
}

export default AboutUs;
