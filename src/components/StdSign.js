import React, { useState } from 'react'
import axios from 'axios'
import background from './images/background.jpg'
import { useHistory } from 'react-router-dom';
import './teachSign.css'

//This is the sign in page for students. 
const StdSign = () => {
    const history = useHistory();
    const ClickStdForm =() => history.push('/stdForm');

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

    const [values] = useState({uname:'',password:''});

    //This function sends an http request but does not submit data for some reason
    //See if you can correct it and make it so that data is sent to the database with the http request
    //no from validation is implemented here so that needs to be done as well(for now you can type whatever you want and login)
    const submitForm = e => {
        e.preventDefault();
        axios.post('https://run.mocky.io/v3/7a060cf1-0d9d-41c0-8e98-5fd532b99c43',{values})
        .then(function(response){
            console.log(response);
            history.push('/StdSelect');
        })
    }


    return (
        <div style={styles.header}>
            <div style={styles.content}>
                <section className="form animated flipInX">
                <h2>Login To Student Account</h2>
                <p className="valid">Valid. Please wait a moment.</p>
                <p className="error">Error. Please enter correct Username &amp; password.</p>
                <form className="loginbox">
                    <input placeholder="Username" type="text" id="username" required></input>
                    <input placeholder="Password" type="password" id="password" required></input>
                <button id="submit" onClick={submitForm}>Login</button><br/><br/>
                <p>Are you a new member?</p><br/>
                <button id="sign" onClick={ClickStdForm}>Sign in</button><br/>
                </form>
                </section>
            </div>
        </div>
    )
}

export default StdSign
