import React from 'react';


function UserView() {
  return (
    <>
    <center> <h1 class="tituloo">Reserva Ahora!</h1></center>
    <div className="wrapper">
      <Card
        title="Mitad del Mundo"
        description="Fall Favorite • Boots"
        date="02/03/2022"
      />

      <Card
        title="Centro Historico"
        description="Sweater Season • Cozy"
        date="05/04/2022"
      />
      <Card
        title="Atacames"
        description="Demin • Verstile"
        date="22/05/2022"
      />
      <Card
        title="El Carmen"
        description="Blouse • Lacey"
        date="12/06/2022"
      />
    </div>
    </>
  );
}

function Card(props) {
  return (
    <div className="card">
      <div className="card__body">
        <h1 className="card__title">{props.title}</h1>
        <p className="card__description">{props.description}</p>
        <p className="card__date">{props.date}</p>
        <button className="card__btn">Reservar</button>
      </div>
    </div>
  );
}


export default UserView