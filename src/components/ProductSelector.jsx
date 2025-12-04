import './ProductSelector.css'

function ProductSelector({ products, onQuantityClick }) {
  return (
    <div className="product-selector">
      <h2 className="product-title">cantidad de producto</h2>
      <div className="product-list">
        {products.map(product => (
          <div key={product.id} className="product-row">
            <label className="product-label">{product.name}</label>
            <button
              className="quantity-button"
              onClick={() => onQuantityClick(product)}
            >
              {product.quantity}
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductSelector
