import NavBar from "../components/NavBar";
import SectionPay from "../components/SectionPay";
import SocialNetwork from "../components/SocialNetwork";
import Card from "../components/Card";
import Footer from "../components/Footer";
import SectionLogo from "../components/SectionLogo";

function LandingPage() {
    return ( 
        <>
            <NavBar/>
            <SectionLogo/>
            <SectionPay/>
            <SocialNetwork/>
            <Card/>
            <Footer/>
        </>
     );
}

export default LandingPage;