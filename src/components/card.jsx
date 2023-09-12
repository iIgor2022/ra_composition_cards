export default function Card({ children, title, text, btnName }) {
  return (
    <div className="card">
      {children}
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
        <a href="#0" className="card-btn">{btnName}</a>
      </div>
    </div>
  )
}