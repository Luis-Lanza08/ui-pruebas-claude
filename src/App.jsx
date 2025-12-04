import { useState } from 'react'
import './App.css'
import ProductSelector from './components/ProductSelector'
import ControlPanel from './components/ControlPanel'
import DetectedBags from './components/DetectedBags'
import LoadData from './components/LoadData'
import Numpad from './components/Numpad'

function App() {
  const [products, setProducts] = useState([
    { id: 1, name: 'producto 1', quantity: 0 },
    { id: 2, name: 'producto 2', quantity: 0 },
    { id: 3, name: 'producto 3', quantity: 0 }
  ])

  const [showNumpad, setShowNumpad] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [detectedBags, setDetectedBags] = useState(0)
  const [processStatus, setProcessStatus] = useState('stopped') // stopped, running, paused

  const handleQuantityClick = (product) => {
    setSelectedProduct(product)
    setShowNumpad(true)
  }

  const handleNumpadConfirm = (value) => {
    if (selectedProduct) {
      setProducts(products.map(p =>
        p.id === selectedProduct.id ? { ...p, quantity: parseInt(value) || 0 } : p
      ))
    }
    setShowNumpad(false)
    setSelectedProduct(null)
  }

  const handleStart = () => {
    setProcessStatus('running')
  }

  const handlePause = () => {
    setProcessStatus('paused')
  }

  const handleRestart = () => {
    setProcessStatus('stopped')
    setDetectedBags(0)
    setProducts(products.map(p => ({ ...p, quantity: 0 })))
  }

  const handleFinalize = () => {
    alert('Proceso finalizado')
    handleRestart()
  }

  // Calcular datos de carga
  const totalBags = products.reduce((sum, p) => sum + p.quantity, 0)
  const estimatedTime = Math.floor(totalBags * 1.5) // ejemplo: 1.5 min por bolsa

  return (
    <div className="hmi-container">
      <div className="hmi-grid">
        {/* Panel superior izquierdo: Productos */}
        <div className="panel panel-products">
          <ProductSelector
            products={products}
            onQuantityClick={handleQuantityClick}
          />
        </div>

        {/* Panel superior derecho: Controles */}
        <div className="panel panel-controls">
          <ControlPanel
            status={processStatus}
            onStart={handleStart}
            onPause={handlePause}
            onRestart={handleRestart}
          />
        </div>

        {/* Panel inferior izquierdo: Bolsas detectadas */}
        <div className="panel panel-detected">
          <DetectedBags count={detectedBags} />
        </div>

        {/* Panel inferior derecho: Datos de carga */}
        <div className="panel panel-load-data">
          <LoadData
            products={products}
            totalBags={totalBags}
            estimatedTime={estimatedTime}
            onFinalize={handleFinalize}
          />
        </div>
      </div>

      {/* Numpad popup */}
      {showNumpad && (
        <Numpad
          onConfirm={handleNumpadConfirm}
          onCancel={() => setShowNumpad(false)}
          initialValue={selectedProduct?.quantity || 0}
          productName={selectedProduct?.name}
        />
      )}
    </div>
  )
}

export default App
