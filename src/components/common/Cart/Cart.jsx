import { useCart } from '../../../hooks/queries/useCart';
import CartProduct from '../CartProduct/CartProduct';


import './Cart.css'

const Cart = ({ isVisible }) => {
    const { data, isLoading, isError, error } = useCart();
    const toggleCart = isVisible ? "" : "" ;
    

    const reducer = (acc, cartProduct) => {
        const quantity = Number(cartProduct.quantity);
        const price =  Number(cartProduct.product.price);

        return acc + quantity * price;
    }

    const total = data?.reduce((acc, cartProduct)=> acc + Number(cartProduct.quantity) * Number(cartProduct.product.price)) ?? 0;

    if (isLoading) return <p>Loading Cart...</p>

    if (isError) return <p>{error.message ?? "Not load cart"}</p>

  return (
    <div>
        <aside className='card'>
            <h2 className='cart_title'>Shopping Cart</h2>

            {!data.length && <p>Empty Cart</p>}

            {Boolean(data.length) && (
                <section>
                      <ul>
                            {data.map(cartProduct => <li key={cartProduct.id}>
                                                        <CartProduct cartProduct={cartProduct} />
                                                    </li>)}
                     </ul>

                     <div>
                        <p>
                            <span>Total:</span>
                            <em>{total.toFixed(2)}</em>
                        </p>

                        <button>Checkout</button>
                     </div>
                </section>

                
              
                
            )}
        </aside>
    </div>
  )
  }
export default Cart