import Header from "./components/Header"
import Article from "./components/Article"
import Footer from "./components/Footer"
import japanImage from "./assets/images/japan.jpg"
import greeceImage from "./assets/images/greece.jpg"
import monacoImage from "./assets/images/monaco.jpg"
import dubaiImage from "./assets/images/dubai.jpg"

export default function App() {
  return (
    <>
      <Header />
      <main>
      {articles.map((key, index) => (
        <Article
          key={index}
          imageSrc={key.imageSrc}
          altText={key.altText}
          location={key.location}
          mapLink={key.mapLink}
          date={key.date}
          description={key.description}
          locationFull={key.locationFull}
        />
      ))}
      </main>
      <Footer />
    </>
  )
} 

const articles = [
{
	imageSrc: japanImage,
	altText: "Image of Tokyo, Japan city",
	location: "Japan",
  mapLink: "https://maps.app.goo.gl/QUbrZ2xB9yYQCyRW9",
	date: "1 Dec, 2024 - 30 Dec, 2024",
	description: "Tokyo is a vibrant metropolis blending ultramodern skyscrapers with traditional temples, and it's home to the world-famous Shibuya Crossing, one of the busiest pedestrian intersections on the planet.",
	locationFull: "Tokyo, Japan"
},
{
  imageSrc: monacoImage,
	altText: "Image of Monaco shore at night",
	location: "Monaco",
  mapLink: "https://maps.app.goo.gl/H9jPf3qH4Gnd2vTP6",
	date: "1 Dec, 2024 - 30 Dec, 2024",
	description: "Monaco is a glamorous microstate on the French Riviera, renowned for its Monte Carlo Casino, the Formula 1 Grand Prix, and being a playground for the rich and famous.",
	locationFull: "Principality of Monaco"
},
{
	imageSrc: dubaiImage,
	altText: "Image of Dubai city",
	location: "Dubai",
  mapLink: "https://maps.app.goo.gl/BDCxxXThMDnPtFvXA",
	date: "1 Dec, 2024 - 30 Dec, 2024",
	description: "Dubai is a city of superlatives, featuring the world’s tallest building, the Burj Khalifa, and the luxurious Palm Jumeirah, an artificial archipelago shaped like a palm tree.",
	locationFull: "Dubai, United Arab Emirates"
},
];
