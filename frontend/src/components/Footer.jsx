function Footer(){
    return(
        <>
<footer id="footer" className="footer bg-overlay">
    <div className="footer-main">
        <div className="container">
            <div className="row justify-content-between">
                <div className="col-lg-4 col-md-6 footer-widget footer-about">
                    <h3 className="widget-title">About Moudwork</h3>
                    <img
                        loading="lazy"
                        width="200px"
                        className="footer-logo"
                        src="../assets/images/footer-logo.png"
                        alt="Moudwork"
                    />
                    <p>
                        Moudwork is a leading construction company dedicated to delivering high-quality projects across residential, commercial, and industrial sectors. Our commitment to excellence and innovation drives us to exceed client expectations with every project we undertake.
                    </p>
                    <div className="footer-social">
                        <ul>
                            <li>
                                <a href="https://facebook.com/moudwork" aria-label="Facebook">
                                    <i className="fab fa-facebook-f" />
                                </a>
                            </li>
                            <li>
                                <a href="https://twitter.com/moudwork" aria-label="Twitter">
                                    <i className="fab fa-twitter" />
                                </a>
                            </li>
                            <li>
                                <a href="https://instagram.com/moudwork" aria-label="Instagram">
                                    <i className="fab fa-instagram" />
                                </a>
                            </li>
                            <li>
                                <a href="https://github.com/moudwork" aria-label="Github">
                                    <i className="fab fa-github" />
                                </a>
                            </li>
                        </ul>
                    </div>
                    {/* Footer social end */}
                </div>
                {/* Col end */}
                <div className="col-lg-4 col-md-6 footer-widget mt-5 mt-md-0">
                    <h3 className="widget-title">Working Hours</h3>
                    <div className="working-hours">
                        We operate 7 days a week, excluding major holidays. Reach out to us for any urgent needs via our hotline or contact form.
                        <br />
                        <br /> Monday - Friday: <span className="text-right">09:00 - 18:00</span>
                        <br /> Saturday: <span className="text-right">10:00 - 16:00</span>
                        <br /> Sunday and holidays: <span className="text-right">Closed</span>
                    </div>
                </div>
                {/* Col end */}
                <div className="col-lg-3 col-md-6 mt-5 mt-lg-0 footer-widget">
                    <h3 className="widget-title">Our Services</h3>
                    <ul className="list-arrow">
                        <li>
                            <a href="/pricing">Building Remodels</a>
                        </li>
                        <li>
                            <a href="/pricing">Renovation Projects</a>
                        </li>
                        <li>
                            <a href="/pricing">Home Construction</a>
                        </li>
                        
                    </ul>
                </div>
                {/* Col end */}
            </div>
            {/* Row end */}
        </div>
        {/* Container end */}
    </div>
    {/* Footer main end */}
    <div className="copyright">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-md-6">
                    <div className="copyright-info">
                        <span>
                            Copyright © 2024 Moudwork. Designed &amp; Developed by{" "}
                            <a href="#">Abdessamia Ennaji</a>
                        </span>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="footer-menu text-center text-md-right">
                        <ul className="list-unstyled">
                            <li>
                                <a href="/About">About Us</a>
                            </li>
                            
                            <li>
                                <a href="/faq">FAQs</a>
                            </li>
                            <li>
                                <a href="/news">News</a>
                            </li>
                            <li>
                                <a href="/pricing">Pricing</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* Row end */}
            <div
                id="back-to-top"
                data-spy="affix"
                data-offset-top={10}
                className="back-to-top position-fixed"
            >
                <button className="btn btn-primary" title="Back to Top">
                    <i className="fa fa-angle-double-up" />
                </button>
            </div>
        </div>
        {/* Container end */}
    </div>
    {/* Copyright end */}
</footer>

        </>
    )
}

export default Footer;