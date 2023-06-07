import Button from "./Button";
import { Link } from "react-router-dom";
import "./ArticleTeaser.css";
import BlogDetails from "../pages/BlogDetails";

const ArticleTeaser = (props) => {
  console.log(props);
  return (
    <article>
      <img src={props.item.img_url} alt="" />
      <h2 className="article-title">{props.item.title}</h2>
      <Link to={`/blog/` + props.item.id} element={<BlogDetails />}>
        <Button name="Read More"></Button>
      </Link>
    </article>
  );
};

export default ArticleTeaser;
