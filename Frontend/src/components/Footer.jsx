import "../assets/style/Footer.css";
import ImgLogo from "../assets/img/imgLogoFooter.svg";

function Footer() {
    return ( 
        <>
            <div className="container">
                <footer className="d-flex flex-wrap justify-content-between align-items-center border-top">
                    <p className="col-md-4 mb-0 text-muted">© 2024 Todos los derechos reservados.</p>
                    <a href="/" className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
                        <img className="zoomOnHover" src={ImgLogo} alt="" width="80"/>
                    </a>
                    <ul className="nav col-md-4 justify-content-end">
                        <li><a href="#" className="px-2 text-muted">Facebook</a></li>
                        <li><a href="#" className="px-2 text-muted">Instagram</a></li>
                        <li><a href="#" className="px-2 text-muted">Inicio</a></li>
                    </ul>
                </footer>
            </div>
        </>
     );
}

export default Footer;