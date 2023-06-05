import "./02_ArticlesListBodyLanding.css";
import articlesContent from "../articles/articles_content";
import { NavLink } from "react-router-dom";

export default function ArticlesListBodyLanding() {
  return (
    <div className='ArticlesListBodyLanding'>
      <div>{
        articlesContent.map(item => {

          const { art_id, art_title_tag,art_title, art_pic_link, art_link_params} = item;

          return (
            <div key={art_id} className="articleVignetteLandingPage"
            style={{backgroundImage: "url(" + art_pic_link + ")"}}
            >
              <NavLink to={"/article/" + art_link_params} >
              <div className="artcileVignetteBlackFilter">
              <p className="art_title_tag">{art_title_tag}</p>
              <h4 className="art_title">{art_title}</h4>
              </div>
              </NavLink>
            </div >
          )
        })
        }</div>
    </div>
  )
}
