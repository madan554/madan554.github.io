export function BaseraObject() {
  return (
    <div className="basera-preview product-object">
      <aside>
        <span className="basera-mark">Basera</span>
        <ul>
          <li className="on">Today</li>
          <li>Rooms</li>
          <li>Rent</li>
          <li>Expenses</li>
        </ul>
      </aside>
      <div className="basera-main">
        <p className="basera-hello">Good afternoon, Rajesh · Owner</p>
        <div className="basera-stats">
          <div>
            <span>Occupancy</span>
            <strong>
              48<span>/55</span>
            </strong>
            <i className="meter" style={{ ['--fill' as string]: '87%' }} />
          </div>
          <div>
            <span>Vacant beds</span>
            <strong>7</strong>
          </div>
          <div>
            <span>Pending rent</span>
            <strong className="warn">₹28,500</strong>
          </div>
        </div>
        <ul className="basera-feed">
          <li>
            <b>Rent</b> Collect ₹28,500 from 6 residents
          </li>
          <li>
            <b>Ask Basera</b> Who hasn’t paid? — 12 pending this month
          </li>
        </ul>
      </div>
    </div>
  )
}

export function CeroHeroObject() {
  return (
    <div className="cero-object product-object">
      <p className="cero-mark">CeroHero AI</p>
      <p className="cero-sub">Sustainability hub · production RAG</p>
      <div className="cero-card">
        <p>Welcome back</p>
        <span>Sign in to the grounded coach.</span>
        <i />
        <b>Continue with email</b>
      </div>
    </div>
  )
}
