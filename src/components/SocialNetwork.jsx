import Tittle from "../atoms/Tittle.jsx";
import IconWhatsApp from "../assets/icons/iconWhatsapp.avif";
import IconFacebook from "../assets/icons/iconFacebook.avif";
import IconInstagram from "../assets/icons/iconInstagram.avif";
import "../assets/style/SocialNetwork.css";

function SocialNetwork() {
    return ( 
        <>
            <Tittle text="Red Social"/>
            <div className="cardsSocialNetwork mt-5 mb-5 d-flex flex-md-row flex-column" id="RedesSociales">
                <div className="cards green">
                    <a href="https://wa.me/+529611226217" target="_blank"><img src={IconWhatsApp} width="250" height="250"/></a>
                </div>
            </div>
        </>
     );
}

export default SocialNetwork;