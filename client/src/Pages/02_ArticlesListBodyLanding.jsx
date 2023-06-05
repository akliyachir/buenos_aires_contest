import "./02_ArticlesListBodyLanding.css";
import articlesContent from "../articles/articles_content";

export default function ArticlesListBodyLanding() {
  return (
    <div className='ArticlesListBodyLanding'>
      <div>{
        articlesContent.map(item => {

          const { art_id, art_title_tag,art_title, art_pic_link} = item;

          return (

            <div key={art_id} className="articleVignetteLandingPage"
            style={{backgroundImage: "url(" + art_pic_link + ")"}}
            >
              <div className="artcileVignetteBlackFilter">
              <p className="art_title_tag">{art_title_tag}</p>
              <h4 className="art_title">{art_title}</h4>
              </div>
            </div >
          )

        })


        }</div>
    </div>
  )
}
