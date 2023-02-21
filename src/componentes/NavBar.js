import CartWidget from './CartWidget';
import '../App.css';


function NavBar() {
    return (
        <header>
            <nav className='nav'>
                
                <ul className='items'>
                    <li><a href="../index.html"><img className='logo' src="../logo.png"/></a></li>
                    <li><a href="../index.html">Inicio</a></li>
                    <li><a href="../index.html">Productos</a></li>
                    <li><a href="../index.html">Contacto</a></li>
                    <li className='carrito'><CartWidget/></li>
                </ul>
            </nav>
        </header>
    )
}

export default NavBar;