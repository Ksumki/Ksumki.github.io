import React from 'react';

function Footer() {
    return (
        <footer>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About Us</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#blog">Blog</a></li>
                <li><a href="#contact">Contact Us</a></li>
            </ul>
            <p>Follow us on social media</p>
            <div className="social-icons">
                <a href="https://www.facebook.com" target="_blank" className="facebook" rel="noreferrer">
                    <i className="fab fa-facebook"></i>
                </a>
                <a href="https://www.instagram.com" target="_blank" className="instagram" rel="noreferrer">
                    <i className="fab fa-instagram"></i>
                </a>
            </div>
            <div>Newsletter Signup</div>
        </footer>
    );
}

export default Footer;
