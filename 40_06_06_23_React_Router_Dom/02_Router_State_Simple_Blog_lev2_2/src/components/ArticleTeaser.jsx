import Button from "./Button";
import { Link } from "react-router-dom";
import "./ArticleTeaser.css";

const ArticleTeaser = (props) => {
  return (
    <article>
      <img src={props.item.img_url} alt="" />
      <h2 className="article-title">{props.item.title}</h2>
      <Link>
        <Button name="Read More"></Button>
      </Link>
    </article>
  );
};

export default ArticleTeaser;
