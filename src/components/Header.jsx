import './Header.css'

function Header({ onBack }) {
  return (
    <header className="hmi-header">
      <div className="header-brand">
        <div className="header-logo">
          <span className="logo-text">CK</span>
        </div>
        <h1 className="header-title">Chicken's Kingdom - Control de Proceso</h1>
      </div>
      <button className="header-back-button" onClick={onBack}>
        <span className="back-icon">◄</span> Regresar
      </button>
    </header>
  )
}

export default Header
