import React, { useState } from 'react';
import styled from 'styled-components';
import { addArt } from "../actions";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";

const AddArticleForm = (props) => {

    let history = useHistory();
    const userId = localStorage.getItem('userId')

    const defaultformState = {
        title: '',
        url: '',
        categories: {
            tech: false,
            diy: false,
            beauty: false,
            gardening: false,
            automotive: false,
            sports: false,
            medical: false,
            creative: false,
            relationships: false,
            news: false,
            crime: false,
            politics: false
        },
        author: '',
        notes: '',
        user_ID: userId
    };

    let [formData, setformData] = useState(defaultformState);

    const handleChange = (e) => {
        if (e.target.value) {
            setformData({ ...formData, [e.target.name]: e.target.value })
        };
    }

    let handleCategory = (e) => {
        let catName = e.target.getAttribute("name");
        setformData({
            ...formData,
            categories: {
                ...formData.categories,
                [catName]: !formData.categories[catName]
            }
        });

    }

    const handleSubmit = (e) => {
        e.preventDefault();

        let categoriesString = '';
        
        Object.keys(formData.categories).forEach(key => {
            if (formData.categories[key] === true)
            categoriesString += `${key} `;
        })

        const newForm = formData;
        newForm.categories = categoriesString;

        props.addArt(newForm, history);
        
    };

    return (
        <ArticleContainer>
            <div id="stickynote">
                <h2 id="articleAdd">Add Article</h2>

                <form onSubmit={handleSubmit}>
                    <label htmlFor="title" id="titleLabel">
                        Article Title:
                <input type="text" placeholder="Title of Article" name="title" size="70" id="title" value={formData.title} onChange={handleChange} />
                    </label>

                    <label htmlFor="url" id="urlLabel">
                        URL of Article:
                <input type="url" placeholder="Article URL" id="url" name="url" size="70" value={formData.url} onChange={handleChange} />
                    </label>

                    <label htmlFor="author" id="authorLabel">
                        Author / Source:
                <input type="text" id="author" name="author" size="70" value={formData.author} onChange={handleChange} />
                    </label>
                    <div id="cats">
                        Categories:
                        <div id="catsections">
                            <div className={formData.categories.tech ? "catsectionactive" : "catsection"} >
                                <label name="tech" onClick={handleCategory}>Technology</label>
                            </div>
                            <div className={formData.categories.diy ? "catsectionactive" : "catsection"}>
                                <label name="diy" onClick={handleCategory}>Do-It-Yourself</label>
                            </div>
                            <div className={formData.categories.beauty ? "catsectionactive" : "catsection"}>
                                <label name="beauty" onClick={handleCategory}>Beauty</label>
                            </div>
                            <div className={formData.categories.gardening ? "catsectionactive" : "catsection"}>
                                <label name="gardening" onClick={handleCategory}>Gardening</label>
                            </div>
                            <div className={formData.categories.automotive ? "catsectionactive" : "catsection"}>
                                <label name="automotive" onClick={handleCategory}>Automotive</label>
                            </div>
                            <div className={formData.categories.sports ? "catsectionactive" : "catsection"}>
                                <label name="sports" onClick={handleCategory}>Sports</label>
                            </div>
                            <div className={formData.categories.medical ? "catsectionactive" : "catsection"}>
                                <label name="medical" onClick={handleCategory}>Medical</label>
                            </div>
                            <div className={formData.categories.creative ? "catsectionactive" : "catsection"}>
                                <label name="creative" onClick={handleCategory}>Creative</label>
                            </div>
                            <div className={formData.categories.relationships ? "catsectionactive" : "catsection"}>
                                <label name="relationships" onClick={handleCategory}>Relationships</label>
                            </div>
                            <div className={formData.categories.news ? "catsectionactive" : "catsection"}>
                                <label name="news" onClick={handleCategory}>News</label>
                            </div>
                            <div className={formData.categories.crime ? "catsectionactive" : "catsection"}>
                                <label name="crime" onClick={handleCategory}>Crime</label>
                            </div>
                            <div className={formData.categories.politics ? "catsectionactive" : "catsection"}>
                                <label name="politics" onClick={handleCategory}>Politics</label>
                            </div>
                        </div>
                    </div>
                    <label htmlFor="notes" id="notesLabel">
                        Notes / Reason for adding:
                <textarea id="notes" name="notes" value={formData.notes} onChange={handleChange} />
                    </label>

                    <button> Add Article</button>
                </form>
            </div>
        </ArticleContainer>
    )

}
const ArticleContainer = styled.div`
    padding:20px;
    font-size:1.2rem;
    
    #stickynote{
        background-color:#fbfbfb;
        border-radius:2px;
        padding:2%;
        width:500px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);


        h2{
            
            font-size:4rem;
            margin-left:15%;
            margin-bottom:0%;
            margin-top:0%;

        }

        form{
            display:flex;
            padding-top:5%;
            border-top:1px solid lightgray;
            flex-direction:column;
            justify-content:center;
            align-items:center;
            

            button{
            font-size: 1rem;
        }
            label{
                display:flex;
                flex-direction:column;
                align-items:flex-start;
                font-family:'Poppins';
        }
        #cats{
            display:flex;
            flex-direction:column;
            font-family:'Poppins';

            #catsections{
                display:flex;
                flex-direction:row;
                flex-wrap:wrap;
                justify-content:center;
                font-size:.8rem;
                
              
                .catsection{
                    border:1px solid lightgray;
                    background-color:white;
                    border-radius:20px;
                    margin:2%;
                    padding:1%;
                    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
                    label{
                       font-family:'Poppins';
                    }
                }
                .catsectionactive{
                    border:1px solid black;
                    border-radius:20px;
                    margin:2%;
                    padding:1%;
                    background-color:#F38181;
                    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

                    label{
                        font-family:'Poppins';
                    }
                }
            }
        }
        #notes{
            width:500px;
            height:150px;
            }
        button{
            background-color: #756c83;
            color:#fbfbfb;
            border:0px;
        }
        }  
    }
    `
const mapStateToProps = state => {
    return {
        user: state.logInReducer.user
    }
}

const mapDispatchToProps = { addArt };

export default connect(mapStateToProps, mapDispatchToProps)(AddArticleForm);