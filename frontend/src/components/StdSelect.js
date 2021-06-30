import React, { useState,useEffect } from 'react'
import axios from 'axios'
import background from './images/background.jpg'
import './teachSign.css'
import { useHistory } from 'react-router-dom';
import Button from './Button'

//this page displays all teachers tutoring a student
const StdSelect = () => {
    const history = useHistory();
    const ClickStudentPage =() => history.push('/StudentPage');

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

      const [data,getdata] = useState(['']);

      useEffect(()=>{
        retrieveData();
        },[]);

      //function retrievs teacher information from database
      const retrieveData = () =>{
          axios.get('http://localhost:4005/app/teachzoom/')
          .then((response)=>{
              const allData = response.data;
              getdata(allData);
          })
          .catch(error => console.log(`error:${error}`));
      }
      const sendData = (value) =>{
          axios.post('https://run.mocky.io/v3/7a060cf1-0d9d-41c0-8e98-5fd532b99c43',{value})
          .then((response) =>{
              console.log(response.data);
              console.log(value);
              ClickStudentPage();
          })
      }

      //I'd be best to add a title for this page
    return (
        <div style={styles.header}>
            { 
                data.map((teacher) => (
                    <div className="card" key={teacher.id}>
                        <h2>{teacher.name}</h2>
                        <h4>{teacher.subject}</h4>
                        <span>{teacher.description}</span><br/><br/>
                        <Button text="View" width="120px"  height="50px" onClick={()=>sendData(teacher.name)}/>
                    </div>
                    )
                )
            }
        </div>
    )
}

export default StdSelect

//sfasfasfafs//

//sfsafasdfsdfdsfsdf