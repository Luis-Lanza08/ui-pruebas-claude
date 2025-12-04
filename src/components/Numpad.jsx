import { useState } from 'react'
import './Numpad.css'

function Numpad({ onConfirm, onCancel, initialValue, productName }) {
  const [value, setValue] = useState(initialValue.toString())

  const handleNumber = (num) => {
    if (value === '0') {
      setValue(num)
    } else if (value.length < 6) {
      setValue(value + num)
    }
  }

  const handleClear = () => {
    setValue('0')
  }

  const handleBackspace = () => {
    if (value.length > 1) {
      setValue(value.slice(0, -1))
    } else {
      setValue('0')
    }
  }

  const handleConfirm = () => {
    onConfirm(value)
  }

  return (
    <div className="numpad-overlay">
      <div className="numpad-container">
        <div className="numpad-header">
          <h3>{productName}</h3>
          <button className="numpad-close" onClick={onCancel}>✕</button>
        </div>

        <div className="numpad-display">{value}</div>

        <div className="numpad-grid">
          <button className="numpad-key" onClick={() => handleNumber('7')}>7</button>
          <button className="numpad-key" onClick={() => handleNumber('8')}>8</button>
          <button className="numpad-key" onClick={() => handleNumber('9')}>9</button>

          <button className="numpad-key" onClick={() => handleNumber('4')}>4</button>
          <button className="numpad-key" onClick={() => handleNumber('5')}>5</button>
          <button className="numpad-key" onClick={() => handleNumber('6')}>6</button>

          <button className="numpad-key" onClick={() => handleNumber('1')}>1</button>
          <button className="numpad-key" onClick={() => handleNumber('2')}>2</button>
          <button className="numpad-key" onClick={() => handleNumber('3')}>3</button>

          <button className="numpad-key numpad-clear" onClick={handleClear}>C</button>
          <button className="numpad-key" onClick={() => handleNumber('0')}>0</button>
          <button className="numpad-key numpad-backspace" onClick={handleBackspace}>⌫</button>
        </div>

        <div className="numpad-actions">
          <button className="numpad-cancel" onClick={onCancel}>CANCELAR</button>
          <button className="numpad-confirm" onClick={handleConfirm}>ACEPTAR</button>
        </div>
      </div>
    </div>
  )
}

export default Numpad
