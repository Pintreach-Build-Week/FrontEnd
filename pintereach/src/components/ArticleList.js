import React from "react";
import ArticleCard from "./ArticleCard"
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

const ArticleList = () => {

    let history = useHistory();
    const handleClick = e => {
        history.push("/add-article");
    }

    // function ArticleDetails({ article }) {
    //     return (
    //       <Link to={`/articles/${article.id}`}>
    //         <ArticleCard articleId={article.id} />
    //       </Link>
    //     );
    //   }

    return(
        <div>
            <h1>Article List</h1>
            <ArticleCard/>
            {/* {props.article.map(article => (
          <ArticleDetails key={article.id} article={article} />
        ))} */}
            <button onClick = {handleClick}>Add Article</button>
        </div>
    )
}

export default ArticleList;