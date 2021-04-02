import background from './images/background.jpg'
import './teachSign.css'
import React, { useState,useEffect } from 'react'
import axios from 'axios'

const TeachPage = () => {

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

      const [data,getdata] = useState(['']);

      useEffect(()=>{
        retrieveData();
        },[]);

        const sendData = (value) =>{
            axios.post('https://run.mocky.io/v3/7a060cf1-0d9d-41c0-8e98-5fd532b99c43',{value})
            .then((response) =>{
                console.log(response.data);
                console.log('data sent');
                console.log('reloading page');
            })
        }  

      const retrieveData = () =>{
        axios.get('https://run.mocky.io/v3/4a75c441-a60a-40f8-a87c-5e64cf8162c0')
        .then((response)=>{
            const allData = response.data;
            getdata(allData);

        })
        .catch(error => console.log(`error:${error}`));
    }

    return (
        <div style={styles.header}>
            <h2>Your Lectures</h2>
            <div className="linkSlider">
            { 
                data.map((links) => (
                    <div className="slot" key={links.id}>
                        <h3>Topic: {links.title}</h3><br/>
                        <a href={links.link}>{links.link}</a><br/><br/>
                        <p>{links.description}</p>
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
                        <input placeholder="Title" type="text" id="title"s></input>
                        <input placeholder="Paste Link Here" type="text" id="link"></input>
                        <textarea id="desc" name="desc" rows="4" cols="50">
                        Description goes here.
                        </textarea>
                        <button id="post" onClick={()=>sendData(data)}>post</button><br/>
                    </form>
                </section>
            </div>
        </div>
    )
}

export default TeachPage
