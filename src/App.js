import './App.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const aboutHimItems = [
  'He will often lay a toy at your feet and patiently wait for you throw it at your convenience.',
  'He will lick everyone who comes through the door.',
  'He LOVES wearing clothes and wants you to put clothes on him. Same with boots.',
  'He does NOT shed at ALL.',
  'He is easy to train (< 10 minutes).',
  'He is socially intelligent and considerate.',
  'He loves to meet and play with other dogs, too.',
  'He was born with a heart of gold.',
  'He is a nappy puppy who will wake you up around 7:30am-9am daily for food and a potty break.',
  'We currently spoil him heavily.'
];

const logisticsItems = [
  'Timeframe: about a few months, with potential to adopt permanently (TBD).',
  'Dog: Rocko. Fully vaccinated and up to date on shots and neutered.',
  '10-month old puppy f1b Cavapoo (mother is a standard poodle, father is a King Charles Cavalier) from healthy parents.',
  'No health or behaviorial issues whatsoever. His vet has said his health is remarkable.',
  'Size: small medium. He is 22" tall, 22" wide, and 34.5 lbs.',
  'Availability: ASAP.',
  'Location: He is currently in San Francisco, CA. We are open to the entire Bay Area and Northern California. We would like to pay him regular visits weekly or so (we can discuss).'
]

const imageFileNames = [
  'IMG_0315.webp',
  'IMG_0530.jpg',
  'IMG_0533.jpg',
  'IMG_0540.jpg',
  'IMG_0978.webp',
  'IMG_1115.webp',
]


const Photos = () => {
  return (
    <Carousel className='carousel'>
      {
        imageFileNames.map((fileName, index) => {
          return (
            <div key={index}>
              <img alt='Rocko' src={`/assets/${fileName}`} />
            </div>
          )
        })
      }
    </Carousel>
  )
}


function App() {
  return (
    <div className="App">
      <h1>Foster wanted for 10-month Cavapoo puppy (Bay Area, CA)</h1>
      <Photos />
      <p>
        We are a 30-something year old professional working couple living in San Francisco, CA raising a lovely dog.
      </p>
      <p>
        Recently, my partner has tragically become severely allergic to our puppy, Rocko, out of nowhere. We are seeking a prospective Foster parent for him for now, while we pursue allergy treatment and immunotherapy treatment (which will take 3-12 months+).
      </p>
      <p>
        Rocko is our loving, rather perfect 10-month old, neutered male puppy. His personality is that of a perfectly awesome dog. We describe him as very sociable, obedient, loves to play, loves everybody, and is a low maintenance dog. He has puppy energy, needs daily walks, is house trained (he can hold it for ~12 hours at a time and needs to go out only 2x/day), eats 2x/day, and loves to be by your side, play fetch, tug of war, watch TV with you, and nap at your feet while you work.
      </p>
      <p>
      Things about him:
      <ul>
        {
          aboutHimItems.map((item, index) => {
            return <li key={index}>{item}</li>
          })
        }
      </ul>
      </p>
      <p>
        We can give you all supplies and meals, and a general guidebook for him, too.
      </p>
      <p>
        We are looking for someone who is kind, responsible, and loving. We are open to a variety of arrangements and are willing to pay for his expenses. We are also open to adopting him out permanently if and when we found out we have to.
      </p>
      <ul>
        {
          logisticsItems.map((item, index) => {
            return <li key={index}>{item}</li>
          })
        }
      </ul>
      <p>
        If you are interested, please let me know about yourself, your home situation, dog raising experience, your interest, and potential routine with him, along with your general availability to foster him. Email me at <a href="mailto:foramyhua@gmail.com">foramyhua@gmail.com</a>. Thank you so much!
      </p>
    </div>
  );
}

export default App;
