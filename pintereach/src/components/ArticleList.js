import React, { useState, useEffect} from "react";
import ArticleCard from "./ArticleCard"
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import AxiosWithAuth from "../utils/AxiosWithAuth";
import { connect } from "react-redux";


const ArticleList = ({user}) => {

    let history = useHistory();
    const [articleList, setArticleList] = useState([]);
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
    const moreInfo = (articleId) => {
        console.log("article id", articleId);
        history.push(`/article-card/${articleId}`);
    }
    useEffect(() => {
        const userId = localStorage.getItem('userId')
        if(user) {
            AxiosWithAuth()
            .get(`articles/user/${userId}`)
            .then(res => {
                console.log('articles belonging to user ', res.data);
                setArticleList(res.data);
            })
            .catch(err => console.log(err))
        } 
    }, [])

    return(
        <div>
            <h1>Article List</h1>

            {/* <ArticleCard/> */}
            {/* {props.article.map(article => (
          <ArticleDetails key={article.id} article={article} />
        ))} */}
            <div>
                <button onClick = {handleClick}>Add Article</button>
            </div>

            {
                articleList.length > 0 ? <ul>
                    {
                        articleList.map((article, index) => (
                            <li key={index}>
                                {article.title}
                                <button onClick={() => moreInfo(article.id)}>More Info</button>
                            </li>
                            )
                        )}
                </ul> : <p>No Articles for user. Click Add Article to add some.</p>
                 
            }
        </div>
    )
}
const mapStateToProps = state => {
    return{
        user: state.logInReducer.user
    }
}
const mapDisplatchToProps = {};
export default connect (mapStateToProps, mapDisplatchToProps)(ArticleList);