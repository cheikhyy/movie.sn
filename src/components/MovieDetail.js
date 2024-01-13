// MovieDetail.js

import React from 'react';
import { Link,Outlet, useParams } from 'react-router-dom';

const MovieDetail = () => {
  const {id} = useParams;

  return (
    <div>
      <h2>Casa de papel {id}</h2>
      <p>Huit voleurs font une prise d'otages dans la Maison royale de la Monnaie d'Espagne, tandis qu'un génie du crime manipule la police pour mettre son plan à exécution.</p>
      <iframe
      id=''
        title="Casa de papel"
        width="560"
        height="315"
        src="https://youtu.be/0ULjL4cbSro?si=bp3Cnc9vKh1CGML9"
        allowFullScreen
      ></iframe>
      <h2>Game  of thrones {id}</h2>
      <p>Scène extraite de le série Game of Thrones S2E01, (2009) créée pour HBO par David Benioff et D. B. Weiss. Il s'agit de l'adaptation de la saga A Song of Ice and Fire, une suite de romans écrits par George R. R. Martin depuis 1996.</p>
      <iframe
      id=''
        title="Game  of thrones"
        width="560"
        height="315"
        src="https://youtu.be/i3iAWBvvGQU?si=kzlryHpJ1pHxnfr0"
        allowFullScreen
      ></iframe>
      <h2>Stars wars {id}</h2>
      <p>
L'histoire de Star Wars, se déroule dans une galaxie qui est le théâtre d'affrontements entre les Chevaliers Jedi et les Seigneurs Sith, personnes antagonistes sensibles à la Force, un champ énergétique mystérieux leur procurant des pouvoirs psychiques.</p>
      <iframe
      id=''
        title="Stars wars"
        width="560"
        height="315"
        src="https://youtu.be/i3iAWBvvGQU?si=kzlryHpJ1pHxnfr0"
        allowFullScreen
      ></iframe>
      <h2>Gotham {id}</h2>
      <p>Synopsis. A Gotham City, ville minée par le crime, un nouveau policier vient renforcer l'unité du capitaine Sarah Essen : il s'agit de l'inspecteur James Gordon. Il fait équipe avec Harvey Bullock afin de résoudre le double meurtre de Thomas et Martha Wayne, des notables de Gotham.</p>
      <iframe
      id=''
        title="Gotham"
        width="560"
        height="315"
        src="https://youtu.be/i3iAWBvvGQU?si=kzlryHpJ1pHxnfr0"
        allowFullScreen
      ></iframe>
      <br />
      <Link to="/"><button>Retour à l'accueil</button></Link>
      <Outlet/> 
    </div>
  );
};

export default MovieDetail;
