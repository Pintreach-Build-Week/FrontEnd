import React, { useState, useEffect } from "react";
import { connect } from "react-redux"
import {removeArt, submitEditArt} from "../actions";
import { useHistory } from "react-router-dom";
import AxiosWithAuth from "../utils/AxiosWithAuth";
import { initialState } from "../reducers/articleCardReducer";
import styled from "styled-components";



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
        <ArtDiv>
            <StyledForm className="artCardForm">
                <div>
                <label htmlFor="title">
                    <StyledTextInput
                        type="text"
                        name="title"
                        id="title"
                        placeholder="title"
                        value={formInfo.title}
                        onChange={handleChanges}
                    />
                </label>
                <label htmlFor="author">
                    <StyledTextInput
                        type="text"
                        name="author"
                        id="author"
                        placeholder="author"
                        value={formInfo.author}
                        onChange={handleChanges}
                    />
                </label>
                </div>
                <div>
                <label htmlFor="url">
                    <StyledTextInput
                        type="text"
                        name="url"
                        id="url"
                        placeholder="url"
                        value={formInfo.url}
                        onChange={handleChanges}
                    />
                </label>
                <label htmlFor="categories">
                    <StyledTextInput
                        type="text"
                        name="categories"
                        id="categories"
                        placeholder="categories"
                        value={formInfo.categories}
                        onChange={handleChanges}
                    />
                </label>
                </div>
                <div>
                <label htmlFor="notes">
                    <textarea
                        rows="4"
                        name="notes"
                        id="notes"
                        placeholder="notes"
                        value={formInfo.notes}
                        onChange={handleChanges}
                    />
                </label>
                </div>
                <div>
                
                <button onClick={editArt}>Edit Article</button>
                <button onClick={backToList}>Back to Article List</button>
                <button onClick={delArt}>Remove Article</button>
                </div>
            </StyledForm>
            {
                (isUpdated) ? <h4>Changed Updated</h4> : null
            }
            {
                (isRemoved) ? <h4>Article Removed</h4> : null
            }
        </ArtDiv>
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

const ArtDiv = styled.div`  

    margin: 24px;

`
const StyledForm = styled.form`
    padding:24px;
    width: 50%;
    margin: 0 auto;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

    
    textarea {
        margin: 12px;
        width: 63%;
    }
`
const StyledTextInput = styled.input`
    margin: 12px;
`

