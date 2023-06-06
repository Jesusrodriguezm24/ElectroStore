import './ProductCard.css'

const ProductCard = ({ product }) => {

    const handleAdd = (e) => {
        e.preventDefault();
    }
  return (
    <section>
        <section>
            <div>
                <img src="" alt="" />
                <img src={product.images[0].url} alt={product.title + "image 1"} />
                <img src={product.images[1].url} alt={product.title + "image 2"} />
            </div>

            <p>{product.brand}</p>
            <h2>{product.title}</h2>
        </section>
        <section>
            <p>Price</p>
            <h3>
                <em>{product.price}</em>
            </h3>
        </section>
        
        <button onClick={handleAdd}>
            Carritoooo img
        </button>
    </section>
  )
}

export default ProductCard