import React from 'react';
import Navbar from './NavBar/Navbar';
import Header from './Header';
import Footer from './Footer';

function AboutPage() {
    return (
        <div>
            <Navbar />
            <Header />
            <section>
                <h2>About Us</h2>
                <p>A detailed description of what "The Wise Company" stands for, its mission, and vision.</p>
            </section>
            <Footer />
        </div>
    );
}

export default AboutPage;
