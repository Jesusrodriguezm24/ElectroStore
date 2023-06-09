import { useSelector } from 'react-redux';
import { useAddProductToCart } from '../../../hooks/queries/useAddProductToCart';
import './ProductCard.css'
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../../hooks/queries/useCart';

const ProductCard = ({ product }) => {
    const { mutate } = useAddProductToCart();
    const { data  } = useCart();
    const isLogged = useSelector(store => store.auth.isLogged);
    const navigate = useNavigate();

    const isProductInCart = data?.some(cartProduct => cartProduct.productId === product.id);

    const isAddVisible = !isLogged || !isProductInCart;

    const handleAdd = (e) => {
        e.preventDefault();

        if (!isLogged) navigate("/login");
        else mutate({ quantity: 1, productId: product.id });
    }
    
  return (
    <section className='product_card_container'>
        <section className='product_card_data'>
            <div className='product_card_img' >
                <img className='card_img visible' src={product.images[0].url} alt={product.title + "image 1"} />
                <img className='card_img hidden' src={product.images[1].url} alt={product.title + "image 2"} />
            </div>

            <p>{product.brand}</p>
            <h2>{product.title}</h2>
   
            <p>Price</p>
            <h3>
                <em>{product.price}</em>
            </h3>
        </section>
        { isAddVisible &&(
            <button onClick={handleAdd}>
                <i className='bx bx-cart-add'> Add</i>
             </button>
        )}

        { !isAddVisible && <p>Ya esta en carrito</p>}
        
    </section>
  )
}

export default ProductCard