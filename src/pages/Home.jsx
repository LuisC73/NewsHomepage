import GamesContainer from "../components/GamesContainer";
import Navbar from "../components/Navbar";
import NewsComponent from "../components/NewsContainer";

function HomeComponent() {
  return (
    <div className="home">
      <Navbar />
      <figure className="home__figure">
        <img
          src={require("../assets/image-web-3-desktop.jpg")}
          alt="web3"
          className="home__img"
        />
      </figure>
      <NewsComponent />
      <section className="home__title">
        <h1 className="home__h1">The Bright Future of Web 3.0?</h1>
      </section>
      <section className="home__info">
        <p className="home__p">
          We dive into the next evolution of the web that claims to put the
          power of the platforms back into the hands of the people. But is it
          really fulfilling its promise?
        </p>
        <a href="/" className="home__a">
          Read more
        </a>
      </section>
      <GamesContainer />
    </div>
  );
}

export default HomeComponent;
