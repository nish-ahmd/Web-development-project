import React, { useState } from 'react'
import axios from 'axios'
import background from './images/background.jpg'
import { useHistory } from 'react-router-dom';
import './teachSign.css'

//This is the account creation page for teachers
export const TeachForm = () => {
    const history = useHistory();

    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')
    const [fullName,setFullname] = useState('')
    const [school,setSchool] = useState('')
    const [stream,setStream] = useState('')

    const styles = {
        header: {
          backgroundImage: `url(${background})`,
          height: '100vh',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover'
        },
      
        content: {
          position:'center',
          height: '100%',
          width: '100%',
          backgroundColor: 'rgba(255, 255, 255, 0.3)',
        }
    }

    const [subs] = useState([
        {id:"1",label:"Maths", value:"Maths"},
        {id:"2",label:"Physics", value:"physics"},
        {id:"3",label:"chemistry", value:"chemsitry"},
        {id:"4",label:"it", value:"it"}
    ]);

    
    /*Note! i did not use the button component i defined here as styling for this button 
    was already in the form template i used*/ 

    //This function submits an http request and then sends the user back to the login page
    //no databinding is done so even though an http request is made no datdrfbdfhda is sent to the server
    const submitForm = e => {
        e.preventDefault();
       const newstd ={
            fullName:fullName,
            stream:stream,
            school:school,
            username:username,
            password:password
        }
      

        axios.post(' http://localhost:4005/app/signupteach',newstd)
        .then(function(response){
            console.log(response);
            console.log(newstd);

            history.push('/stdSign');
        }) 

        alert('A name was submitted: ');
    }

    return ( 
        <div style={styles.header}>
            <div style={styles.content}>
                <section className="form animated flipInX">
                <h2>Sign up as a Teacher</h2>
                <form className="loginbox" onSubmit={submitForm}>
                    
                    <input placeholder="Name" type="text" id="useername" required  value={fullName}  onChange={e => setFullname(e.target.value)}></input>
                    <input placeholder="School" type="text" id="username" required  value={school}  onChange={e => setSchool(e.target.value)}></input>
                    <input placeholder="Username" type="text" id="username" required value={username} onChange={e=> setUsername(e.target.value)} ></input>
                    <input placeholder="Password" type="password" id="password" name="password" required value={password} onChange={e=> setPassword(e.target.value)}></input>
                    <label>I'm teaching:</label>
                    <br/>
                    <select name="subject" id="subject">
                        {subs.map((subs)=>(
                            <option key={Math.random().toString(36).substr(2,9)} value={subs.value}>{subs.label}</option>
                        ))}
                    </select><br/>

                <button id="sign" type="submit" onClick={submitForm}  >Sign up</button><br/>
                </form>
                </section>
            </div>
        </div>
    )
}

export default TeachForm