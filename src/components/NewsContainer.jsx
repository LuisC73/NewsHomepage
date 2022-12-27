import newsInfo from "../utils/newsInfo";
import NewsItem from "./NewsItem";

function NewsComponent() {
  return (
    <section className="news">
      <h2 className="news__h2">New</h2>
      <div className="news__wrapper">
        {newsInfo.map((info, i) => (
          <NewsItem key={i} title={info.title} des={info.des} />
        ))}
      </div>
    </section>
  );
}

export default NewsComponent;
