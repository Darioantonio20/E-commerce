import Tittle from "../atoms/Tittle";
import ImgMariaGuadalupe from "../assets/img/imgMariaGuadalupe.avif";
import ImgDarioAntonio from "../assets/img/imgDarioAntonio.avif";
import IconWhatsApp from "../assets/icons/iconWhatsapp.avif";
import IconFacebook from "../assets/icons/iconFacebook.avif";
import IconGitHub from "../assets/icons/iconGitHub.avif";
import IconLinkedln from "../assets/icons/iconLinkedln.avif";
import '../assets/style/Card.css';

function Card() {
    return ( 
        <>
            <Tittle text="Acerca De Nosotros" />
            <div className="box mt-5 mb-5" id="AcercaDeNosotros">
                <div className="cardcita mt-5 mb-5">
                    <div className="imgBx">
                        <img src={ImgMariaGuadalupe} type="image/avif"/>
                    </div>
                    <div className="details">
                        <h2>Señora Guadalupe<br></br><span>-</span></h2>
                        <a href="https://wa.me/+529611226217" target="_blank">
                            <img className="zoomOnHover" src={IconWhatsApp} width="130" height="130" type="image/avif"/>
                        </a>
                        <a  href="https://www.facebook.com/mariaguadalupe.alvarezerez" target="_blank">
                            <img className="zoomOnHover" src={IconFacebook} width="130" height="130" type="image/avif"/>
                        </a>
                    </div>
                </div>
                <div className="cardcita mt-5 mb-5">
                    <div className="imgBx">
                        <img src={ImgDarioAntonio} type="image/avif"/>
                    </div>
                    <div className="details">
                        <h2>Darío Antonio<br></br><span>Desarrollador Web</span></h2>
                        <a className="zoomOnHover" href="https://www.linkedin.com/in/dario-antonio-gutierrez-alvarez-41353a225/" target="_blank">
                            <img className="zoomOnHover" src={IconLinkedln} width="130" height="130" type="image/avif"/>
                        </a>
                        <a className="zoomOnHover" href="https://github.com/Darioantonio20" target="_blank">
                            <img className="zoomOnHover" src={IconGitHub} width="130" height="130" type="image/avif"/>
                        </a>
                    </div>
                </div>
            </div>       
        </>
     );
}

export default Card;