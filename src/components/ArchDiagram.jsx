function Row({ nodes, accent, label }) {
  return (
    <div className="arch-row">
      {label && <span className="arch-row-label">{label}</span>}
      <div className="arch-nodes">
        {nodes.map((n, i) => (
          <div className="arch-node-wrap" key={n}>
            <span className="arch-node" style={{ borderColor: `${accent}66` }}>{n}</span>
            {i < nodes.length - 1 && <span className="arch-arrow" style={{ color: accent }}>→</span>}
          </div>
        ))}
      </div>
    </div>
  )
}

export default function ArchDiagram({ arch, accent }) {
  if (!arch) return null
  return (
    <div className="arch">
      <Row nodes={arch.flow} accent={accent} label="request" />
      {arch.async && <Row nodes={arch.async} accent={accent} label="background" />}
      {arch.stores && (
        <div className="arch-row">
          <span className="arch-row-label">services · stores</span>
          <div className="arch-stores">
            {arch.stores.map((s) => (
              <span className="arch-store" key={s} style={{ borderColor: `${accent}55` }}>{s}</span>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
