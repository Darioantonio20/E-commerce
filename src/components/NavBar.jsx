import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import '../assets/style/NavBar.css'

function NavBar({ isProductsPage }) {
    const navigate = useNavigate();
    const location = useLocation();

    const handleContactClick = () => {
        if (isProductsPage) {
            navigate('/');
        } else {
            window.location.hash = 'RedesSociales';
        }
    };

    useEffect(() => {
        if (isProductsPage && location.pathname === '/') {
            window.location.hash = 'RedesSociales';
        }
    }, [location, isProductsPage]);

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