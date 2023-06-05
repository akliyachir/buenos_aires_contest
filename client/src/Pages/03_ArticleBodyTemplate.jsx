import {useParams} from "react-router-dom"

export default function ArticleBodyTemplate() {
 const foo = useParams();
  return (
    <div className='ArticleBodyTemplate'>
     <h1>
     foo
     </h1>
     </div>
  )
}
