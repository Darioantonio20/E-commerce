import "../assets/style/SectionPay.css";

function SectionPay() {
    return ( 
        <>
            <div className="gradientDivGreen"></div>
            <div className="bgGreen">
               <p className="tittleInGradiente text-center">Se Acepta Pago En Efectivo</p>
            </div>
            <div className="gradientDivRed"></div>
            <div className="bgRed">
                <p className="tittleInGradiente text-center">Pago Con Tarjeta</p>
            </div>
            <div className="gradientDivOrange"></div>
            <div className="bgOrange">
                <p className="tittleInGradiente text-center">Más Información</p>
                <p className="subTittleGrandiente text-center">+52 961 122 6217</p>
            </div>
            <div className="gradientDivWhite"></div>
        </>
     );
}

export default SectionPay;