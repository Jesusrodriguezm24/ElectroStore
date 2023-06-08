import { Link } from 'react-router-dom';
import { useProducts } from '../../../hooks/queries/useProducts';
import ProductCard from '../ProductCard/ProductCard';


import './ProductList.css';

const ProductList = () => {
  const { data, isLoading, isError } = useProducts();
    
  if (isLoading) return <p>Loading pro</p>

  if (isError) return <p>Algo salio mal</p>

  return (
    <ul className="product_list_container">
    {data.map(product => <li key={product.id}>
                           <Link to={"/product/" + product.id}>
                                <ProductCard product={product}/>                          
                           </Link>                      
                        </li>)}
  </ul>
  )
}

export default ProductList
