import './ProductCard.css'

const ProductCard = ({ product }) => {

    const handleAdd = (e) => {
        e.preventDefault();
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
        
        <button onClick={handleAdd}>
            <i className='bx bx-cart-add'> Add</i>
        </button>
    </section>
  )
}

export default ProductCard