import { useState, useEffect } from 'react'
import './Footer.css'

function Footer({ status = 'stopped', processType = 'HARINADO', user = 'OPERADOR' }) {
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const formatTime = (date) => {
    const hours = date.getHours().toString().padStart(2, '0')
    const minutes = date.getMinutes().toString().padStart(2, '0')
    const seconds = date.getSeconds().toString().padStart(2, '0')
    return `${hours}:${minutes}:${seconds}`
  }

  const formatDate = (date) => {
    const day = date.getDate().toString().padStart(2, '0')
    const month = (date.getMonth() + 1).toString().padStart(2, '0')
    const year = date.getFullYear()
    return `${day}/${month}/${year}`
  }

  const getStatusText = (status) => {
    switch (status) {
      case 'running':
        return 'EN PROCESO'
      case 'paused':
        return 'PAUSADO'
      case 'stopped':
        return 'DETENIDO'
      default:
        return 'DETENIDO'
    }
  }

  const getStatusClass = (status) => {
    switch (status) {
      case 'running':
        return 'status-running'
      case 'paused':
        return 'status-paused'
      case 'stopped':
        return 'status-stopped'
      default:
        return 'status-stopped'
    }
  }

  return (
    <footer className="hmi-footer">
      <div className="footer-info">
        <div className="footer-item">
          <span className="footer-label">ESTADO:</span>
          <span className={`footer-value ${getStatusClass(status)}`}>
            {getStatusText(status)}
          </span>
        </div>
        <div className="footer-item">
          <span className="footer-label">PROCESO:</span>
          <span className="footer-value">{processType}</span>
        </div>
        <div className="footer-item">
          <span className="footer-label">USUARIO:</span>
          <span className="footer-value">{user}</span>
        </div>
      </div>
      <div className="footer-datetime">
        {formatTime(currentTime)} - {formatDate(currentTime)}
      </div>
    </footer>
  )
}

export default Footer
