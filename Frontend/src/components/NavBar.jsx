import '../assets/style/NavBar.css'

function NavBar() {

    return ( 
        <>
            <nav id="menu">
                <div class="menu-item">
                    <div class="menu-text">
                        <a href="#">Inicio</a>
                    </div>
                </div>
                <div class="menu-item highlight">
                    <div class="menu-text">
                        <a href="#RedesSociales">Contacto</a>
                    </div>
                </div>
                <div class="menu-item highlight">
                    <div class="menu-text">
                        <a href="#">Productos</a>
                    </div>
                </div>
            </nav>
        </>
     );
}

export default NavBar;