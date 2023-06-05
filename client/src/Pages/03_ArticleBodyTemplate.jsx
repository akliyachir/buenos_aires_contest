import "./03_ArticleBodyTemplate.css";
import { useParams } from "react-router-dom";
import articlesContent from "../articles/articles_content";

export default function ArticleBodyTemplate() {
  const { art_id } = useParams();

  const {
    art_link_params,
    art_title,
    art_title_tag,
    art_pic_link,
    art_pic_fuente,
    art_by,
    art_date,
    art_content,
  } = articlesContent.filter((item) => item.art_id === art_id)[0];

  return (
    <div className="ArticleBodyTemplate">
      <h2 className="art_title">{art_title}</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
        error aut debitis iure commodi temporibus eveniet consequuntur. Possimus
        accusantium magni quis nulla est, incidunt eveniet rem dolor ex, labore
        vitae.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
        error aut debitis iure commodi temporibus eveniet consequuntur. Possimus
        accusantium magni quis nulla est, incidunt eveniet rem dolor ex, labore
        vitae.
      </p>
    </div>
  );
}
