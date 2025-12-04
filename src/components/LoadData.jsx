import './LoadData.css'

function LoadData({ products, totalBags, estimatedTime, onFinalize }) {
  return (
    <div className="load-data">
      <div className="load-info">
        <h2 className="load-title">Datos de carga</h2>
        <div className="load-details">
          {products.map(product => (
            <div key={product.id} className="load-item">
              bolsas de {product.name}... {product.quantity}
            </div>
          ))}
        </div>
        <div className="load-time">
          <div className="time-label">tiempo estimado</div>
          <div className="time-value">
            {Math.floor(estimatedTime / 60)} hora{Math.floor(estimatedTime / 60) !== 1 ? 's' : ''} y {estimatedTime % 60} mins
          </div>
        </div>
      </div>

      <button className="finalize-button" onClick={onFinalize}>
        FINALIZAR
      </button>
    </div>
  )
}

export default LoadData
