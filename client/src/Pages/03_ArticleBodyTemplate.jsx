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
      <p className="art_by">
        by <span className="regularEnphasis">{art_by + `  `}</span>
        <span>{`    ` + art_date}</span>
      </p>
      <div
        className="art_pic_link"
        style={{ backgroundImage: "url(" + art_pic_link + ")" }}
      />
      <p className="art_pic_fuente"> {art_pic_fuente}</p>
      <p className="parag">
        Villa Epecuén est un village en ruine situé à 500 km de Buenos Aires à
        l’histoire est très intéressante.
      </p>
    </div>
  );
}
