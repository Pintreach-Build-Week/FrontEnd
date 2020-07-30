import React from "react";

mockData = {
    title: "article 1",
    author: "author 1",
    link: "link1"
}

const ArticleCard = (mockData) => {

    return(
        <div>
            <h3>Title: {mockData.title}</h3>
            <h4>Author: {mockData.author}</h4>
            <h4>Link: {mockData.link}</h4>
            <button>Remove Article</button>
            <button>Edit Article</button>
        </div>
    )



}

export default ArticleCard;