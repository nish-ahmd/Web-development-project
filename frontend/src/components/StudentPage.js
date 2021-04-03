import background from './images/background.jpg'
import './teachSign.css'
import React, { useState,useEffect } from 'react'
import axios from 'axios'

const StudentPage = () => {

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
            <h2>Here are all your lessons</h2>
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
        </div>
    )
}

export default StudentPage
