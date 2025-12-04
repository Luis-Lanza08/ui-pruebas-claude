import './ControlPanel.css'

function ControlPanel({ status, onStart, onPause, onRestart }) {
  return (
    <div className="control-panel">
      <button
        className="control-button control-button-start"
        onClick={onStart}
        disabled={status === 'running'}
      >
        <span className="button-icon">▶</span> INICIAR
      </button>

      <button
        className="control-button control-button-pause"
        onClick={onPause}
        disabled={status !== 'running'}
      >
        <span className="button-icon">❚❚</span> PAUSAR
      </button>

      <button
        className="control-button control-button-restart"
        onClick={onRestart}
      >
        <span className="button-icon">↻</span> REINICIAR
      </button>
    </div>
  )
}

export default ControlPanel
