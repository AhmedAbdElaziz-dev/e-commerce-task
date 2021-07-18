import Card from "../Card";

const Cards = ({ cards, search }) => {
  return (
    <div className="album py-5 bg-light">
      <div className="container">
        <div className="row">
          {cards
            .filter((card) => card.title.includes(search))
            .map((card, index) => (
              <Card card={card} key={index} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Cards;
