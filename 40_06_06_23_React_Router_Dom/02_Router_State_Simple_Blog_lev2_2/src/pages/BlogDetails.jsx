import { useParams } from "react-router-dom";
import Data from "../components/Data";
import "./BlogDetails.css";
import Nav from "../components/Nav";

const BlogDetails = () => {
  const idParams = useParams();
  console.log(idParams);
  const detailBlog = Data.filter((elm) => {
    return elm.id.toString() === idParams.id;
  });
  console.log(detailBlog);
  return (
    <>
      <Nav />
      <section className="blog-detail-site">
        <img
          className="blog-picture"
          src={detailBlog[0].img_url}
          alt={detailBlog[0].title}
        />
        <div className="title-container">
          {" "}
          <h1>{detailBlog[0].title}</h1> <p>{detailBlog[0].published_date}</p>
        </div>

        <p>{detailBlog[0].description}</p>

        <p className="author-name">By {detailBlog[0].author}</p>
      </section>
    </>
  );
};

export default BlogDetails;
