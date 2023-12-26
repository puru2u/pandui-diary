import React from 'react'
import logo from '../../assests/images/logo.png'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <footer>
    <div className="bg-dark footer pt-5">
        <div className="container py-5">
            <div className="row justify-content-center">
                <div className="col-lg-3 col-12">
                    <div className="footer-title">
                        <Link to="/">
                            <img src={logo} alt=""/>
                        </Link>
                        <div>
                            <p className="mb-0">
                                Tempor erat elitr rebum at clita. Diam dolor diam ipsum et tempor sit. Aliqu diam
                                amet diam et eos labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus
                                clita duo justo et tempor
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-12">
                    <div className="footer-title">
                       <h3>Get In Touch</h3>
                        <div>
                            <p>
                                <i className="icon-location"></i>
                                #70 Ganesha Layout, Bangalore, India
                            </p>
                            <p>
                                <i className="icon-phone-1"></i>
                                +91 9040602117
                            </p>
                            <p>
                                <i className="icon-mail-alt"></i>
                                purussec@gmail.com
                            </p>
                        </div>
                        <div className="d-flex pt-2">
                            <a className="btn  btn-social" href="https://www.facebook.com/puru2u">
                                <i className="icon-facebook"></i>
                            </a>
                            <a className="btn  btn-social" href="https://www.youtube.com/@puru2u">
                                <i className="icon-youtube-play"></i>
                            </a>
                            <a className="btn  btn-social" href="https://www.instagram.com/puru2u/">
                                <i className="icon-instagram"></i>
                            </a>
                            <a className="btn  btn-social" href="https://www.linkedin.com/in/puru2u/">
                                <i className="icon-linkedin"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-12">
                    <div className="footer-title">
                        <h3>Popular Link</h3>
                        <ul>
                            <li>
                                <Link to="/about">About Us</Link>
                            </li>
                            <li>
                                <Link to="/contact">Contact Us</Link>
                            </li>
                            <li>
                                <Link to="/">Privacy Policy</Link>
                            </li>
                            <li>
                                <Link to="/">Terms & Condition</Link>
                            </li>
                            <li>
                                <Link to="/">Career</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-3 col-12">
                    <div className="footer-title">
                    <h3>Our Services</h3>
                        <ul>                            
                            <li>
                                <Link to="/">Machine Intelligence</Link>
                            </li>
                            <li>
                                <Link to="/">Automated Robotics</Link>
                            </li>
                            <li>
                                <Link to="/">Forecasting Insights</Link>
                            </li>
                            <li>
                                <Link to="/">Information Analytics</Link>
                            </li>
                            <li>
                                <Link to="/">Automated Systems</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
    </div>
    </div>
</footer>
  )
}

export default Footer