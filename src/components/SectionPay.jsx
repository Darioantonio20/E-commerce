import IconBgGreenIcon from "../assets/icons/bgGreenIcon.avif";
import IconBgOrangeIcon from "../assets/icons/bgOrangeIcon.avif";
import IconBgRedIcon from "../assets/icons/bgRedIcon.avif";
import "../assets/style/SectionPay.css";

function SectionPay() {
    return ( 
        <>
            <div className="gradientDivGreen"></div>
            <div className="parallaxBgGreen bgGreen">
                <p className="tittleInGradiente text-center">Se Acepta Pago En Efectivo</p>
                <div className="d-flex justify-content-center align-items-center">
                    <img className="logoBgGreen" src={IconBgGreenIcon} type="image/avif"/>
                </div>
            </div>
            <div className="gradientDivRed"></div>
            <div className="parallaxBgRed bgRed">
                <p className="tittleInGradiente text-center">Transferencias Bancarias</p>
                <div className="d-flex justify-content-center align-items-center">
                    <img className="img-fluid logoBgGreen" src={IconBgRedIcon} type="image/avif"/>
                </div>
            </div>
            <div className="gradientDivOrange"></div>
            <div className="bgOrange text-center">
                <p className="tittleInGradiente text-center">Más Información</p>
                <p className="subTittleGrandiente text-center">+52 961 122 6217</p>
                <div className="d-flex justify-content-center align-items-center">
                    <img className="logoBgGreen img-fluid" src={IconBgOrangeIcon} type="image/avif"/>
                </div>
            </div>
            <div className="gradientDivWhite"></div>
        </>
     );
}

export default SectionPay;