import { useState } from 'react'
import './CartProduct.css'
import { useUpdateCart } from '../../../hooks/queries/useUpdateCart';
import { useSelector } from 'react-redux';
import { useDeleteProductFromCart } from '../../../hooks/queries/useDeleteProductFromCart';

const CartProduct = ( { cartProduct } ) => {
    const initialQuantity = Number(cartProduct.quantity);
    const price = Number(cartProduct.product.price);
    const { mutate, isLoading } = useUpdateCart();
    const deleteMutation = useDeleteProductFromCart();
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
        if (isLogged) mutate({cartProductId: cartProduct.id, newQuantity: quantity });
        ////////////////
      }

      const handleDelete = () => {
        if (isLogged) deleteMutation.mutate(cartProduct.id);
      }

  return (
    <article>
                                                    
        <div>
           <img src={cartProduct.product.images[0].url} alt={cartProduct.product.title} />
        </div>
        <div>
            <header>
                    <h4>{cartProduct.product.title}</h4>
                 <button onClick={handleDelete} disabled={deleteMutation.isLoading}>
                    <i className='bx bxs-trash'></i>
                 </button>
            </header>
            <div>
                 <button onClick={decrement}> - </button>
                      <p> {quantity} </p>
                 <button onClick={increment}> + </button>
             </div>

                {initialQuantity !== quantity && <button onClick={handleUpdate} disabled={isLoading}>Update Cart</button>}

                <div>
                 <h5>Total:</h5>
                 <p>
                     <em>$ {initialQuantity * price}</em>
                </p>
             </div>
         </div>
                                                  
</article>
  )
}

export default CartProduct