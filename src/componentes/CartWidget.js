import { BsFillCartCheckFill } from 'react-icons/bs';
import '../App.css';


function CartWidget() {
    return (
        <div className='contenedor-carrito'>
            <a href='../index.html'>
                <BsFillCartCheckFill className="carrito" />
                <span className='numero-carrito'>7</span>
            </a>
        </div>
    )
};

export default CartWidget;