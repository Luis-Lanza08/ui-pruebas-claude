import './DetectedBags.css'

function DetectedBags({ count }) {
  return (
    <div className="detected-bags">
      <h2 className="detected-title">BOLSAS DETECTADAS</h2>
      <div className="detected-count">{count}</div>
    </div>
  )
}

export default DetectedBags
