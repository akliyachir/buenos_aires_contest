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
      <div className="ArticleBodyTemplateContent">
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
        <article>
          <p className="parag">
            Villa Epecuén est un village en ruine situé à 500 km de Buenos Aires
            à l’histoire est très intéressante.
          </p>
          <h2 className="ttl">Quelle est l’histoire de Villa Epecuén?</h2>
          <p className="parag">
            Aujourd’hui, les vestiges qui ont déjà accueilli plusieurs tournages
            (dont ce clip de BirdPen réalisé par nos amis de Tango+Tango), se
            visitent librement.
          </p>
          <p className="parag">
            Chacun peut donc évoluer à sa guise, à travers les anciennes rues du
            village et découvrir l’action du temps et de l’eau sur la matière.
            Les charpentes et les baignoires métalliques ont rouillé, les
            bâtisses en béton se sont effondrées et les structures en bois ont
            résisté.
          </p>
          <p className="parag">
            La piscine municipale à ciel ouvert est définitivement abandonnée.
            En marge du village, vous découvrirez l’ancien abattoir, œuvre art
            déco du célèbre architecte argentin Francisco Salamone.{" "}
          </p>
          <h2 className="ttl">
            À quoi ressemble le village fantôme d’Epecuén?
          </h2>
          <p className="parag">
            Aujourd’hui, les vestiges qui ont déjà accueilli plusieurs tournages
            (dont ce clip de BirdPen réalisé par nos amis de Tango+Tango), se
            visitent librement.
          </p>
          <p className="parag">
            Chacun peut donc évoluer à sa guise, à travers les anciennes rues du
            village et découvrir l’action du temps et de l’eau sur la matière.
            Les charpentes et les baignoires métalliques ont rouillé, les
            bâtisses en béton se sont effondrées et les structures en bois ont
            résisté.
          </p>
          <p className="parag">
            La piscine municipale à ciel ouvert est définitivement abandonnée.
            En marge du village, vous découvrirez l’ancien abattoir, œuvre art
            déco du célèbre architecte argentin Francisco Salamone.{" "}
          </p>
          <h2 className="ttl">Comment se rendre à Villa Epecuén?</h2>
          <p className="parag">
            Carhué, la ville la plus proche et point d’arrivée des bus, dispose
            de nombreux hébergements qui faciliteront votre venue.
          </p>
          <ul>
            <li>
              En bus : depuis Retiro (Compagnie Pullman Gral. Belgrano ou Nueva
              Chevallier)
            </li>
            <li>En voiture : depuis Capital Federal, 540 km, environ 6h.</li>
          </ul>
          <p className="parag">Listo!!</p>
        </article>
      </div>
    </div>
  );
}
