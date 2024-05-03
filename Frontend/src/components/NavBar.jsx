import { useNavigate } from 'react-router-dom';
import '../assets/style/NavBar.css'

function NavBar({ isProductsPage }) {

    const navigate = useNavigate();
    const handleContactClick = () => {
        if (isProductsPage) {
            navigate('/').then(() => {
                window.location.hash = 'RedesSociales';
            });
        } else {
            window.location.hash = 'RedesSociales';
        }
    };

    return ( 
        <>
            <nav id="menu">
                <div className="menu-item">
                    <div className="menu-text">
                        <a onClick={() => navigate('/')}>Inicio</a>
                    </div>
                </div>
                <div className="menu-item highlight">
                    <div className="menu-text">
                        <a onClick={handleContactClick}>Contacto</a>
                    </div>
                </div>
                <div className="menu-item highlight">
                    <div className="menu-text">
                        <a onClick={() => navigate('/products')}>Productos</a>
                    </div>
                </div>
            </nav>
        </>
     );
}

export default NavBar;