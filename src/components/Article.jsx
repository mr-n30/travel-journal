import mapMarker from "../assets/images/map-marker.png"
export default function Article({imageSrc, altText, location, mapLink, locationFull, date, description}) {
  return (
    <article className="article-entry">
      <img src={imageSrc} alt={altText} className="article-image"/>
      <div className="article-description">
        <div className="article-marker-container">
          <img src={mapMarker} className="map-marker"/>
          <h3 className="article-h3">
            {location}
            <a href={mapLink} className="map-link">View on Google Maps</a>
          </h3>
        </div>
        <h2 className="article-h2">{locationFull}</h2>
        <p>{date}</p>
        <p>{description}</p>
      </div>
    </article>
  )
}
