import { useNavigate, useParams } from 'react-router-dom'
import './ProductDetail.css'
import { useProductById } from '../../hooks/queries/useProductById';
import ProductList from '../../components/Home/ProductList/ProductList';
import { useState } from 'react';
import { useAddProductToCart } from '../../hooks/queries/useAddProductToCart';
import { useSelector } from 'react-redux';

const ProductDetail = () => {

   const [quantity, setQuantity] = useState(1);
   const { productId } = useParams();
   const { data, isLoading, isError, error } = useProductById(productId);
   const { mutate } = useAddProductToCart();
   const isLogged = useSelector(store => store.auth.isLogged);
   const navigate = useNavigate();

   const increment = () => {
        const newQuantity = quantity + 1;
        const stock = 15;
        if (newQuantity <= stock) setQuantity(newQuantity);
   }

   const decrement = () => {
        const newQuantity = quantity - 1;
        if (newQuantity >= 1) setQuantity(newQuantity);
    }
   
   const hanldeAddCart = () => {
    if (isLogged) mutate({quantity,productId});
    else navigate("/login");
   }

   if (isLoading) return <p>Loading Products</p>;

   if (isError) return <p>{error.message ?? 'Not load'}</p>
   
  return (
    <section>
        <section>
            <section>
                <img src={data.images[0].url} alt={data.title} />
            </section>

            <section>
                <h3>{data.brand}</h3>

                <h2>{data.title}</h2>

                <p>
                 {data.description}
               </p>

                <div>
                    <div>
                        <h3>Price</h3>
                        <p>
                            <em> {data.price} </em>
                        </p>
                    </div>

                    <div>
                        <h3>Quantity</h3>

                        <div>
                            <button onClick={decrement}> - </button>
                            <p>{quantity}</p>
                            <button onClick={increment}> + </button>
                        </div>
                    </div>

                    <button onClick={hanldeAddCart}>Add to cart</button>
                </div>
            </section>
            
        </section>
        
        <ProductList categories={data.categoryId} excludeIds={[data.id]} />
    </section>
  )
}

export default ProductDetail