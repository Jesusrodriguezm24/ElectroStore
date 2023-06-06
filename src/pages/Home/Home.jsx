
import ProductCard from "../../components/Home/ProductCard/ProductCard";
import { useProducts } from "../../hooks/queries/useProducts";

import './Home.css'
import { Link } from "react-router-dom";



const Home = () => {
  const { data, isLoading, isError } = useProducts();

  if (isLoading) return <p>Loading pro</p>

  if (isError) return <p>Algo salio mal</p>

  return (
    <section>
        <h1>products</h1>


      <ul>
        {data.map(product => <li key={product.id}>
                               <Link to={"/product/" + product.id}>
                                    <ProductCard product={product}/>
                               </Link>
                                
                            </li>)}
      </ul>
    </section>
  )
}

export default Home