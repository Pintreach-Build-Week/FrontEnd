import React, { useState, useEffect } from "react";
import { connect } from "react-redux"
import {removeArt, submitEditArt} from "../actions";
import { useHistory } from "react-router-dom";
import AxiosWithAuth from "../utils/AxiosWithAuth";

const mockData = {
    id: 1,
    title: "article 1",
    author: "author 1",
    url: "link1",
    categories: "diy",
    notes: "notes go here"
}




const ArticleCard = ({submitEditArt, removeArt}) => {
    const cardId = 1;
    
    useEffect(() => {
        AxiosWithAuth()
        .get(`/articles/${cardId}`)
        .then( res => {
            console.log("article data", res.data)

        })
        .catch(err => console.log(err))
    },[]);

    let history = useHistory();
    const [formInfo, setFormInfo] = useState ({
        id: 1,
        title: "article 1",
        author: "author 1",
        url: "link1",
        categories:"tech",
        notes: "notes go here"

    })
    const handleChanges = e => {
    
        setFormInfo({
            ...formInfo,
            [e.target.name]: e.target.value
        })
    }
    const editArt = e => {
        e.preventDefault();
        submitEditArt(formInfo, history);
    } 
    const delArt = e => {
        e.preventDefault();
        removeArt(history)
    }

    return(
        <div>
            <form>
                <label htmlFor="title">
                    <input
                        type="text"
                        name="title"
                        id="title"
                        placeholder={mockData.title}
                        value={formInfo.title}
                        onChange={handleChanges}
                    />
                </label>
                <label htmlFor="author">
                    <input
                        type="text"
                        name="author"
                        id="author"
                        placeholder={mockData.author}
                        value={formInfo.author}
                        onChange={handleChanges}
                    />
                </label>
                <label htmlFor="url">
                    <input
                        type="text"
                        name="url"
                        id="url"
                        placeholder={mockData.url}
                        value={formInfo.url}
                        onChange={handleChanges}
                    />
                </label>
                <label htmlFor="categories">
                    <input
                        type="text"
                        name="categories"
                        id="categories"
                        placeholder={mockData.categories}
                        value={formInfo.categories}
                        onChange={handleChanges}
                    />
                </label>
                <label htmlFor="notes">
                    <input
                        type="text"
                        name="notes"
                        id="notes"
                        placeholder={mockData.notes}
                        value={formInfo.notes}
                        onChange={handleChanges}
                    />
                </label>
                <button onClick={delArt}>Remove Article</button>
                <button onClick={editArt}>Edit Article</button>
            </form>
        </div>
    )



}

const mapStateToProps = state => {
    return{

    }
}; 

const mapDispatchToProps = {submitEditArt, removeArt}
export default connect (mapStateToProps, mapDispatchToProps) (ArticleCard);