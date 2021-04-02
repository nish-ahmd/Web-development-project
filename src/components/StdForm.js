import React, { useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom';
import background from './images/background.jpg'
import './teachSign.css'

//This is the student sign in form(account creation form for students)
export const StdForm = () => {
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

    const [values,setValue] = useState({uname:'',password:''});

    //This is the function to submit data to the database
    const submitForm = e => {
        e.preventDefault();
        axios.post('https://run.mocky.io/v3/7a060cf1-0d9d-41c0-8e98-5fd532b99c43',{values})
        .then(function(response){
            console.log(response);
            history.push('/stdSign');
        })
    }

    /*Note! i did not use the button component i defined here as styling for this button 
    was already in the form template i used*/ 

    //This function submits an http request and then sends the user back to the login page
    //no databinding is done so even though an http request is made no data is sent to the server
    return ( 
        <div style={styles.header}>
            <div style={styles.content}>
                <section className="form animated flipInX">
                <h2>Sign up as a student</h2>
                <form className="loginbox" onSubmit={submitForm}>
                    <input placeholder="Username" type="text" id="username" required onChange={e=>setValue({uname:e.target.values})}></input>
                    <input placeholder="Password" type="password" id="password" required onChange={e=>setValue({password:e.target.values})}></input>
                <button id="sign">Sign up</button><br/>
                </form>
                </section>
            </div>
        </div>
    )
}

export default StdForm