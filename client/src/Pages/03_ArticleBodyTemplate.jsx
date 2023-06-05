import "./03_ArticleBodyTemplate.css";
import {useParams} from "react-router-dom";

export default function ArticleBodyTemplate() {
 const {art_link_params} = useParams();
  return (
    <div className='ArticleBodyTemplate'>
     <h1>
     {art_link_params}
     </h1>
     <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque unde sit aut ex possimus facere temporibus iusto placeat earum repellat atque rerum consectetur officia voluptatibus, aperiam quos. Ut, aliquam ipsum?</p>
     </div>
  )
}
