import '../res/footer.css'

const Footer = () => {
    return <div className='footer'>

        <iframe style={{
            position: `relative`,
            textAlign: `right`,
            height: `300px`,
            width: `100%`,
            overflow: `hidden`,
            background: `none`
        }} src="https:www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2880.9492136293493!2d-79.50201558409094!3d43.77391305263375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b2e3b4a73a733%3A0x8325cfb6c8af1690!2sYork%20University!5e0!3m2!1sen!2sca!4v1669918184152!5m2!1sen!2sca"
                frameBorder="0" marginHeight="0" marginWidth="0"></iframe>


        <footer className="footer">
            <div className="footer-top">
                {/*<div className="container">*/}
                    <div className="single-footer f-link">
                        <h3>Store Location</h3>
                        <ul>
                            <li>120 Ian MacDonald Blvd, North York, ON</li>
                        </ul>
                    </div>
                    <div className="single-footer f-link">
                        <h3>Open hours</h3>
                        <ul>
                            <li>Monday - Friday: 9am - 5pm</li>
                            <li>Weekends closed</li>
                        </ul>
                    </div>
                    <div className="single-footer f-link">
                        <h3>Contact us</h3>
                        <ul>
                            <li><a href="mailto:shuge@my.yorku.ca">shuge@my.yorku.ca</a></li>
                        </ul>
                    </div>
                {/*</div>*/}
            </div>
        </footer>

    </div>

}
export default Footer