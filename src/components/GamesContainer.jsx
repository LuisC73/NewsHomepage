import gamesInfo from "../utils/gamesInfo";
import GamesItem from "./GamesItem";

function GamesContainer() {
  return (
    <section className="games">
      {gamesInfo.map((info, i) => (
        <GamesItem
          key={i}
          imgSrc={info.imgSrc}
          number={info.number}
          title={info.title}
          des={info.des}
        />
      ))}
    </section>
  );
}

export default GamesContainer;
