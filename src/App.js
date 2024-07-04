import React from 'react';
import Card from './Card';

const cardData = [
  {
    title: 'Harry Potter',
    description: 'The Boy Who Lived',
    image: 'https://ik.imagekit.io/hpapi/harry.jpg'
  },
  {
    title: 'Hermione Granger',
    description: 'Muggle-born Gryffindor student in Harrys year and one of his best friends Prefect and cofounder of Dumbledores Army',
    image: 'https://ik.imagekit.io/hpapi/hermione.jpeg'
  },
  {
    title: 'Ron Weasley',
    description: 'Ronnie',
    image: 'https://ik.imagekit.io/hpapi/ron.jpg'
  },
  {
    title: 'Severus Snape',
    description: 'Half-Blood Prince',
    image: 'https://ik.imagekit.io/hpapi/snape.jpg'
  },
  {
    title: 'Rubeus Hagrid',
    description: 'Half-giant Hogwarts gamekeeper',
    image: 'https://ik.imagekit.io/hpapi/hagrid.png'
  },
  {
    title: 'Sirius Black',
    description: 'Harrys godfather who was a close friend of Harrys father James. Escapee from Azkaban prison and member of the Order of the Phoenix. Killed in the Battle of the Department of Mysteries by his cousin Bellatrix Lestrange',
    image: 'https://ik.imagekit.io/hpapi/sirius.JPG'
  },
  {
    title: 'Lord Voldemort',
    description: 'the Dark Lord',
    image: 'https://ik.imagekit.io/hpapi/voldemort.jpg'
  },
  {
    title: 'Minerva McGonagall',
    description: 'McGonagall',
    image: 'https://ik.imagekit.io/hpapi/mcgonagall.jpg'
  }

]

const App = () => {
  return (
    <div className="app">
      {cardData.map((card, index) => (
        <Card 
          key={index}
          title={card.title}
          description={card.description}
          image = {card.image}
          />
    ))}

    </div>
  )
}

export default App;
