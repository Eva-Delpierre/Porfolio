import React, { useState } from 'react';
import {Carousel, CarouselItem, CarouselControl} from 'reactstrap';
import { Button } from 'react-bootstrap';

const items = [
  {
    src: '../images/Fourno1.jpg',
    altText: 'Slide 1',
    titre: 'Fourno & Cie',
    description : 'Livre interactif de recettes avec commande vocale et import des recettes du site Marmiton',
    technos: 'React Native / MongoDb',
    urlGit: 'https://github.com/Soph87/FournoFront',
    urlHeroku: 'https://www.youtube.com/watch?reload=9&v=Ht7Zn858Izg&feature=youtu.be',
    type: "Lien vers la vidéo",
  },
  {
    src: '../images/Fourno2.jpg',
    altText: 'Fourno & Cie',
    titre: 'Fourno & Cie',
    description : 'Livre interactif de recettes avec commande vocale et import des recettes du site Marmiton',
    technos: 'React Native / MongoDb',
    urlGit: 'https://github.com/Soph87/FournoFront',
    urlHeroku: 'https://www.youtube.com/watch?reload=9&v=Ht7Zn858Izg&feature=youtu.be',
    type: "Lien vers la vidéo",
  },
  {
    src: '../images/Fourno3.jpg',
    altText: 'Fourno & Cie',
    titre: 'Fourno & Cie',
    description : 'Livre interactif de recettes avec commande vocale et import des recettes du site Marmiton',
    technos: 'React Native / MongoDb',
    urlGit: 'https://github.com/Soph87/FournoFront',
    urlHeroku: 'https://www.youtube.com/watch?reload=9&v=Ht7Zn858Izg&feature=youtu.be',
    type: "Lien vers la vidéo",
  },
  {
    src: '../images/Fourno4.jpg',
    altText: 'Fourno & Cie',
    titre: 'Fourno & Cie',
    description : 'Livre interactif de recettes avec commande vocale et import des recettes du site Marmiton',
    technos: 'React Native / MongoDb',
    urlGit: 'https://github.com/Soph87/FournoFront',
    urlHeroku: 'https://www.youtube.com/watch?reload=9&v=Ht7Zn858Izg&feature=youtu.be',
    type: "Lien vers la vidéo",
  },
  {
    src: '../images/MesFilms1.jpg',
    altText: 'Mes films',
    titre: 'Mes films',
    description : 'Site listant les films français avec la possiblité de les liker et de leur mettre une note',
    technos: 'React / Express.js / MongoDb / API',
    urlGit: 'https://github.com/Eva-Delpierre/Mes-films-2020',
    urlHeroku: 'https://mes-films-2020.herokuapp.com/',
    type: "Lien vers le site",
  },
  {
    src: '../images/MesFilms2.jpg',
    altText: 'Mes films',
    titre: 'Mes films',
    description : 'Site listant les films français avec la possiblité de les liker et de leur mettre une note',
    technos: 'React / Express.js / MongoDb / API',
    urlGit: 'https://github.com/Eva-Delpierre/Mes-films-2020',
    urlHeroku: 'https://mes-films-2020.herokuapp.com/',
    type: "Lien vers le site",
  },
  {
    src: '../images/TicketsTrain1.jpg',
    altText: 'Tickets Train',
    titre: 'Tickets Train',
    description : 'Site permettant la réservation de billet de train',
    technos: 'Express.js / MongoDb',
    urlGit: 'https://github.com/Eva-Delpierre/Tickets-Train',
    urlHeroku: 'https://ticket-train-2020.herokuapp.com/',
    type: "Lien vers le site",
  },
  {
    src: '../images/TicketsTrain2.jpg',
    altText: 'Tickets Train',
    titre: 'Tickets Train',
    description : 'Site permettant la réservation de billet de train',
    technos: 'Express.js / MongoDb',
    urlGit: 'https://github.com/Eva-Delpierre/Tickets-Train',
    urlHeroku: 'https://ticket-train-2020.herokuapp.com/',
    type: "Lien vers le site",
  },
  {
    src: '../images/TicketsTrain3.jpg',
    altText: 'Tickets Train',
    titre: 'Tickets Train',
    description : 'Site permettant la réservation de billet de train',
    technos: 'Express.js / MongoDb',
    urlGit: 'https://github.com/Eva-Delpierre/Tickets-Train',
    urlHeroku: 'https://ticket-train-2020.herokuapp.com/',
    type: "Lien vers le site",
  },
];

const Projets = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} className="carousel"/>
          <h5><b> {item.titre} </b> - <i> {item.description} </i></h5>
          <p>{item.technos}</p>
          <Button variant="light"> <a href={item.urlGit} target="_blank" rel="noopener noreferrer"> GitHub </a> </Button>
          <Button variant="light"> <a href={item.urlHeroku} target="_blank" rel="noopener noreferrer"> {item.type} </a> </Button>
      </CarouselItem>
    );
  });

  return (
    <div id="projets">
      <h3> Mes projets </h3>

      <div class="d-flex justify-content-center">
        <div class="col-sm-8 carousel-fade">
          <Carousel
            activeIndex={activeIndex}
            next={next}
            previous={previous}
          >
            {slides}
            <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
            <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
          </Carousel>
        </div>
      </div>
    </div>
  );
}


export default Projets;
