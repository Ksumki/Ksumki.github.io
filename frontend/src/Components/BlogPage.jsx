import React from 'react';
import Header from './Header';
import Footer from './Footer';

function BlogPage() {
    return (
        <div>
            <Header />
            <section>
                <h2>Blog</h2>
                <div>
                    {/* Blog posts previews here */}
                </div>
            </section>
            <Footer />
        </div>
    );
}

export default BlogPage;
