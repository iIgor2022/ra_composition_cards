export default function CardImage({ src, alt }) {
  return (
    <div className="img-container">
      <img
        src={src}
        alt={alt}
        className="card-img-top"
        onError={(ev) => ev.target.style.left = "-15px"}
      />
    </div>
  )
}