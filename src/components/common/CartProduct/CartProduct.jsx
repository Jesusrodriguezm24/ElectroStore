import { useState } from 'react'
import './CartProduct.css'
import { useUpdateCart } from '../../../hooks/queries/useUpdateCart';
import { useSelector } from 'react-redux';

const CartProduct = ( { cartProduct } ) => {
    const initialQuantity = Number(cartProduct.quantity);
    const price = Number(cartProduct.product.price);
    const { mutate, isLoading } = useUpdateCart();
    const [quantity, setQuantity] = useState(initialQuantity);
    const isLogged = useSelector(store => store.auth.isLogged);

    const increment = () => {
        const newQuantity = quantity + 1;
        const stock = 10;
        if (newQuantity <= stock) setQuantity(newQuantity);
      };
    
      const decrement = () => {
        const newQuantity = quantity - 1;
        if (newQuantity >= 1) setQuantity(newQuantity);
      };

      const handleUpdate = () => {
        if (isLogged) mutate({cartProductId: cartProduct.id, });
        ////////////////
      }

  return (
    <article>
                                                    
        <div>
            <img src={cartProduct.product.image[0].url} alt={cartProduct.product.title} />
        </div>
        <div>
            <header>
                    <h4>{cartProduct.product.title}</h4>
                 <button>eliminarrrrrrr</button>
            </header>
            <div>
                 <button onClick={decrement}> - </button>
                      <p> 1 </p>
                 <button onClick={increment}> + </button>
             </div>

                {initialQuantity !== quantity && <button onClick={handleUpdate} disabled={isLoading}>Update Cart</button>}

                <div>
                 <h5>Total</h5>
                 <p>
                     <em>{initialQuantity * price}</em>
                </p>
             </div>
         </div>
                                                  
</article>
  )
}

export default CartProduct