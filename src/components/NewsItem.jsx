function NewsItem({ title, des }) {
  return (
    <div className="news__item">
      <h3 className="news__h3">{title}</h3>
      <p className="news__p">{des}</p>
    </div>
  );
}

export default NewsItem;
