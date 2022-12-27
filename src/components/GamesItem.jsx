function GamesItem({ imgSrc, number, title, des }) {
  return (
    <div className="games__item">
      <figure className="games__figure">
        <img
          src={require(`../assets/${imgSrc}.jpg`)}
          alt=""
          className="games__img"
        />
      </figure>
      <div className="games__div">
        <h3 className="games__h3">{number}</h3>
        <h4 className="games__h4">{title}</h4>
        <p className="games__p">{des}</p>
      </div>
    </div>
  );
}

export default GamesItem;
