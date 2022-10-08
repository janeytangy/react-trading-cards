'use strict';

const tradingCardData = [
  {
    name: "Balloonicorn",
    skill: "video games",
    imgUrl: "/static/img/balloonicorn.jpg",
    cardId: 1,
  },
  {
    name: "Float",
    skill: "baking pretzels",
    imgUrl: "/static/img/float.jpg",
    cardId: 2,
  },
  {
    name: "Llambda",
    skill: "knitting scarves",
    imgUrl: "/static/img/llambda.jpg",
    cardId: 3,
  },
  {
    name: "Eevee",
    skill: "being normal",
    imgUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/133.png",
    cardId: 4,
  },
  {
    name: "Sylveon",
    skill: "being a fairy type",
    imgUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/700.png",
    cardId: 5,
  },
  {
    name: "Polymorphism",
    skill: "costumes",
    imgUrl: "/static/img/polymorphism.jpeg",
    cardId: 6,
  },
  {
    name: "Short Stack Overflow",
    skill: "ocean animal trivia",
    imgUrl: "/static/img/shortstack-overflow.jpeg",
    cardId: 7,
  },
  {
    name: "Merge",
    skill: "bullet journaling",
    imgUrl: "/static/img/merge.png",
    cardId: 8,
  },
];

function createTradingCard(props) {
  return (
    <div className="card">
      <h2>Name: {props.name}</h2>
      <img src={props.imgUrl} alt="profile" />
      <h2>Skill:{props.skill} </h2>
    </div>
  );
}

function TradingCardContainer() {

  const tradingCardList = []

  //  for (const fruit of fruits) {
  //   fruitListItems.push(<li key={fruit.fruit_id}>{fruit.name}</li>);
  // }

  for (const tradingCard of tradingCardData) {
    tradingCardList.push(createTradingCard(tradingCard), <div key={tradingCard.name}></div>);
  };

  return (
    <React.Fragment> 
      {tradingCardList}
    </React.Fragment>
  );

}

ReactDOM.render(<TradingCardContainer />, 
  document.querySelector('#card-list')
);

// ReactDOM.render(
//   <TradingCard name="Balloonicorn" skill="video games" imgUrl="/static/img/balloonicorn.jpg" />,
//   document.querySelector('#balloonicorn'),
// );

// ReactDOM.render(
//   <TradingCard name="Float" skill="baking pretzels" imgUrl="/static/img/float.jpg" />,
//   document.querySelector('#float'),
// );

// ReactDOM.render(
//   <TradingCard name="Llambda" skill="knitting scarves" imgUrl="/static/img/llambda.jpg" />,
//   document.querySelector('#llambda'),
// );

// ReactDOM.render(
//   <TradingCard name="Eevee" skill="being normal" imgUrl="https://assets.pokemon.com/assets/cms2/img/pokedex/full/133.png" />,
//   document.querySelector('#eevee'),
// );

// ReactDOM.render(
//   <TradingCard name="Sylveon" skill="being fairy" imgUrl="https://assets.pokemon.com/assets/cms2/img/pokedex/full/700.png" />,
//   document.querySelector('#sylveon'),
// );
