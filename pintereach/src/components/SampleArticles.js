import React,{useEffect, useState} from 'react';
import styled from 'styled-components';
import axios from 'axios';

const SampleArticles = () =>{
    
    const [datas, setDatas] = useState([]);
    useEffect(()=>{
        axios.get('https://bw-pt-pintereach-1-ebi-backend.herokuapp.com/articles')
             .then(res=>{
                 let articles = res.data;
                 console.log(articles);
                  setDatas(articles);})
             .catch(err=>console.log(err));
            }, []);
            console.log(datas);

    const dummyData = [{id:1,title:'Naruto',url:'https://en.wikipedia.org/wiki/Naruto',author:'Wikipedia'},{id:2, title:'Expanding Consciousness',url:'https://www.americanscientist.org/article/expanding-consciousness',author:'American Scientist'},{id:3,title:'Randomness theory could hold key to internet security',url:'https://www.sciencedaily.com/releases/2020/07/200727194721.htm',author:'Cornell University'}]        

    return(

        <Articles>  
             {dummyData.map((arts, i)=>(
                <div className="articlePreview" key={i}>
                    <h4>{arts.title}</h4>
                    <h5>Source: {arts.author}</h5>
                    <div className="linkTo"><a href="/home">Click to Preview</a></div>
                </div>
            ))}           
            {datas.map((art, i)=>(
                <div className="articlePreview" key={i}>
                    <h4>{art.title}</h4>
                    <h5>Source: {art.author}</h5>
                    <div className="linkTo"><a href="/home">Click to Preview</a></div>
                </div>
            ))}
       
        </Articles>
    )

};
const Articles = styled.div`
    background-color:white;
    display:flex;
    flex-wrap:wrap;
    justify-content:space-evenly;
    .articlePreview{
        width:20vw;
        height:25vh;
        background-color:#fbfbfb;
        margin:20px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        padding:10px;
        font-size:0.8rem;
        text-align:center;

        h4{
            font-size:2.5rem;
            font-weight:bold;
            font-family:'Bebas Neue';
            text-align:center;
        }
        h5{
            text-align:center;
        }
        .linkTo{
            background-color:#756C83;
            color:white;
            width:50%;
            margin:50px auto;
            border-radius:5px;
            &:hover{
                background-color:#F38181;
            }

            a{
                color:white;

                font-size:1.5rem;
                text-decoration:none;
            }
        }
    
    }
`
export default SampleArticles;