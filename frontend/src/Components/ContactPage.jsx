import React from 'react';
import Header from './Header';
import Footer from './Footer';

function ContactPage() {
    return (
        <div>
            <Header />
            <section>
                <h2>Contact Us</h2>
                <form>
                    {/* Contact form inputs here */}
                </form>
                <div>
                    {/* Contact details here */}
                </div>
            </section>
            <Footer />
        </div>
    );
}

export default ContactPage;
