import ImgBgBalls from "../assets/img/bgBalls.avif";
import IconLogoSection from "../assets/icons/iconLogoSection.avif";
import "../assets/style/SectionLogo.css";

function SectionLogo() {
    return ( 
        <>
            <div className="parallax">
                <div className="text-center">
                    <img className="logo img-fluid" src={IconLogoSection} type="image/avif"/>
                </div>
            </div>  
        </>
     );
}

export default SectionLogo;