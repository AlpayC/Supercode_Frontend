import Nav from "../components/Nav";
import ArticleTeaser from "../components/ArticleTeaser";
import Data from "../components/Data";
import "./Blog.css";

const Blog = () => {
  return (
    <>
      <Nav />
      <section className="blog-grid">
        {Data.map((element, index) => (
          <ArticleTeaser item={element} key={index} />
        ))}
      </section>
    </>
  );
};

export default Blog;
