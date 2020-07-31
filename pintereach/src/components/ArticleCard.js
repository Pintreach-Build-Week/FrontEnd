import React, { useState, useEffect } from "react";
import { connect } from "react-redux"
import {removeArt, submitEditArt} from "../actions";
import { useHistory } from "react-router-dom";
import AxiosWithAuth from "../utils/AxiosWithAuth";
import { initialState } from "../reducers/articleCardReducer";
import "../../src/"



const ArticleCard = ({
    submitEditArt, 
    removeArt, 
    isUpdating, 
    isUpdated,
    isRemoving,
    isRemoved
}) => {
    let history = useHistory();
    const [formInfo, setFormInfo] = useState(initialState)
    const cardId = 1; 
    useEffect(() => {
        AxiosWithAuth()
        .get(`/articles/${cardId}`)
        .then( res => {
            setFormInfo(res.data);
        })
        .catch(err => console.log(err))
    },[]);
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
    const backToList = () =>{
        history.push("/article-list")
    }
    if (isUpdating) {
        return <h4>Loading Update...</h4>
    }
    if (isRemoving){
        return <h4>Removing Article...</h4>
    }
    
    return(
        <div>
            <form className="artCardForm">
                <label htmlFor="title">
                    <input
                        type="text"
                        name="title"
                        id="title"
                        placeholder="title"
                        value={formInfo.title}
                        onChange={handleChanges}
                    />
                </label>
                <label htmlFor="author">
                    <input
                        type="text"
                        name="author"
                        id="author"
                        placeholder="author"
                        value={formInfo.author}
                        onChange={handleChanges}
                    />
                </label>
                <label htmlFor="url">
                    <input
                        type="text"
                        name="url"
                        id="url"
                        placeholder="url"
                        value={formInfo.url}
                        onChange={handleChanges}
                    />
                </label>
                <label htmlFor="categories">
                    <input
                        type="text"
                        name="categories"
                        id="categories"
                        placeholder="categories"
                        value={formInfo.categories}
                        onChange={handleChanges}
                    />
                </label>
                <label htmlFor="notes">
                    <input
                        type="text"
                        name="notes"
                        id="notes"
                        placeholder="notes"
                        value={formInfo.notes}
                        onChange={handleChanges}
                    />
                </label>
                <button onClick={delArt}>Remove Article</button>
                <button onClick={editArt}>Edit Article</button>
                <button onClick={backToList}>Back to Article List</button>
            </form>
            {
                (isUpdated) ? <h4>Changed Updated</h4> : null
            }
            {
                (isRemoved) ? <h4>Article Removed</h4> : null
            }
        </div>
    )

}

const mapStateToProps = state => {
    console.log('state', state);
    return{
        isUpdating: state.articleCardReducer.isUpdating,
        isUpdated: state.articleCardReducer.isUpdated,
        isRemoving: state.articleCardReducer.isRemoving,
        isRemoved: state.articleCardReducer.isRemoved 
    }
}; 

const mapDispatchToProps = {submitEditArt, removeArt}
export default connect (mapStateToProps, mapDispatchToProps) (ArticleCard);