import background from './images/background.jpg'
import './teachSign.css'
import { useHistory } from 'react-router-dom';
import React, { useState,useEffect } from 'react'
import axios from 'axios'

const TeachPage = () => {
    const history = useHistory();

    const styles = {
        header: {
          backgroundImage: `url(${background})`,
          height: '100vh',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover'
        },
      
        content: {
          height: '100%',
          width: '100%',
          backgroundColor: 'rgba(255, 255, 255, 0.3)',
        }
      }

      const [title,setTitle] = useState('')
      const [link,setLink] = useState('')
      const [description,setDescription] = useState('')
      const [data,getData] = useState([''])



      const submitForm = e => {
        e.preventDefault();
       const newstd ={
            title:title,
            link:link,
            description:description
            
        }
      

        axios.post(' http://localhost:4005/app/teachzoom',newstd)
        .then(function(response){
            console.log(response);
            console.log(newstd);

            history.push('/stdSign');
        }) 

        alert('A name was submitted: ');
    }


      useEffect(()=>{
        
       retrieveData(); },[]);

        /*const sendData = (value) =>{
            axios.post('https://run.mocky.io/v3/7a060cf1-0d9d-41c0-8e98-5fd532b99c43',{value})
            .then((response) =>{
                console.log(response.data);
                console.log('data sent');
                console.log('reloading page');
            })
        }  */

      const retrieveData = () =>{
        axios.get(' http://localhost:4005/app/teachzoom/')
        .then((response)=>{
            console.log("axios res",response)
             getData (response.data)
            //getdata(allData);

        })
        .catch(error => console.log(`error:${error}`));
    } 

    return (
        <div style={styles.header}>
            <h2 id="lectures-title">Your Lectures</h2>
            <div className="linkSlider">
            { 
                data.map((links) => (
                    <div className="slot" key={data.id}>
                        <h3>Topic: {data.title}</h3><br/>
                        <a href={links.link}>{links.link}</a><br/><br/>
                        <p>{data.description}</p>
                    </div>
                    )
                )
            }
            </div>
            <div>

            </div>
            <div>
                <section className="postForm animated flipInX">
                    <h2>Login Teacher Account</h2>
                    <p className="valid">Valid. Please wait a moment.</p>
                    <p className="error">Error. Please enter correct Username &amp; password.</p>
                    <form className="loginbox">
                        <input placeholder="Title" type="text" id="title" value={title} required onChange={e => setTitle(e.target.value)}></input>
                        <input placeholder="Paste Link Here" type="text" id="link" value={link} onChange={e=>setLink(e.target.value)}></input>
                        <textarea id="desc" name="desc" rows="4" cols="50" value={description} onChange={e=>setDescription(e.target.value)}>
                        Description goes here.
                        </textarea>
                        <button id="post" onClick={submitForm}>post</button><br/>
                    </form>
                </section>
            </div>
        </div>
    )
}

export default TeachPage
