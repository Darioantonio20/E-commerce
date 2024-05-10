import React from 'react';
import NavBar from "../components/NavBar";
import SectionPay from "../components/SectionPay";
import SocialNetwork from "../components/SocialNetwork";
import Card from "../components/Card";
import Footer from "../components/Footer";
import SectionLogo from "../components/SectionLogo";

function LandingPage() {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return ( 
        <>
            <NavBar/>
            <SectionLogo/>
            <SectionPay/>
            <SocialNetwork/>
            <Card/>
                <button onClick={scrollToTop} style={scrollToTopButtonStyle}>Arriba

                </button>
            <Footer/>
        </>
     );
}

const scrollToTopButtonStyle = {
    position: 'sticky',
    bottom: '1.25rem',
    right: '1.25rem',
    zIndex: '1000',
    borderRadius: '50%',
    backgroundColor: 'brown',
    border: 'none',
    color: 'white',
    width: '3.5rem',
    height: '3.5rem',
    transition: 'all 0.3s ease', 
    boxShadow: '0 20px 20px rgba(0, 0, 0, 0.15)', 
};


export default LandingPage;