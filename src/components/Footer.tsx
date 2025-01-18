import React from "react";
import { Facebook, Twitter, Instagram, MapPin, Phone, Mail } from "lucide-react";

const Footer: React.FC = () => {
    return (
        <footer className="section-dark text-white pt-5" id="contact">
            <div className="container">
                <div className="row">
                    {/* The Den Section */}
                    <div className="col-md-4 mb-4">
                        <h5 className="text-success">The Den at Yala</h5>
                        <p className="lead">Experience nature's finest with luxury and comfort.</p>
                        <div className="social-icons">
                            {['facebook', 'twitter', 'instagram'].map((platform) => (
                                <a
                                    key={platform}
                                    href={`#${platform}`}
                                    className="text-white me-3 social-icon"
                                >
                                    {platform === 'facebook' && <Facebook size={24}/>}
                                    {platform === 'twitter' && <Twitter size={24}/>}
                                    {platform === 'instagram' && <Instagram size={24}/>}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="col-md-4 mb-4">
                        <h5 className="text-success">Quick Links</h5>
                        <ul className="list-unstyled">
                            {['About Us', 'Rooms', 'Activities', 'Contact'].map((link) => (
                                <li key={link}>
                                    <a href="#" className="text-white">{link}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="col-md-4 mb-4">
                        <h5 className="text-success">Contact Us</h5>
                        <address>
                            <p><MapPin className="me-2" size={20}/> Yala National Park, Sri Lanka</p>
                            <p><a href="tel:+94123456789" className="text-white"><Phone className="me-2" size={20}/> +94
                                123 456 789</a></p>
                            <p><a href="mailto:info@theden.com" className="text-white"><Mail className="me-2"
                                                                                             size={20}/> info@theden.com</a>
                            </p>
                        </address>
                    </div>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="section-dark py-3 text-center text-light">
                <p>&copy; {new Date().getFullYear()} The Den at Yala. All Rights Reserved.</p>
            </div>



        </footer>
    );
};

export default Footer;
