import './Card.css'

interface Props {
  image: {
    url: string;
    alt: string;
  };
  message: string;
}

export default function Card({ message, image }: Props) {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <h2>{message}</h2>
        </div>
        <div className="flip-card-back">
          <img
            src={image.url}
            alt={image.alt}
          />
        </div>
      </div>
    </div>
  )
}