import '../assets/style/NavBar.css'

function NavBar() {

    return ( 
        <>
           <nav className="navbar text-center mt-5">
                <div className="containercito">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Inicio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Contacto</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Productos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Acerca De Nosotros</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
     );
}

export default NavBar;