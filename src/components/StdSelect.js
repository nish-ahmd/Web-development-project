import React, { useState,useEffect } from 'react'
import axios from 'axios'
import background from './images/background.jpg'
import './teachSign.css'
import Button from './Button'

//this page displays all teachers tutoring a student
const StdSelect = () => {

    const styles = {
        header: {
          backgroundImage: `url(${background})`,
          height: '100vh',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          display:'flex',
          contentAlign:'center'
        }
      }

      const [alldata,getData] = useState(['']);

      useEffect(()=>{
          retrieveData();
      },[]);

      //function retrievs teacher information from database
      const retrieveData = () =>{
          axios.get('https://run.mocky.io/v3/fdcff3da-2e10-460e-a35f-2a8f80bf84c8')
          .then((response)=>{
              const allData = response.data;
              getData(allData);
              console.log(allData);
          })
          .catch(error => console.log(`error:${error}`));
      }
      //I'd be best to add a title for this page
    return (
        <div style={styles.header}>
            { 
                alldata.map((teacher) => (
                    <div className="card">
                        <h2>{teacher.name}</h2>
                        <h4>{teacher.subject}</h4>
                        <span>{teacher.description}</span><br/><br/>
                        <Button text="View" width="120px"  height="50px"/>
                    </div>
                ))
            }
        </div>
    )
}

export default StdSelect

