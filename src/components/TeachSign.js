import React from 'react'
import background from './images/background.jpg'
import { useHistory } from 'react-router-dom';
import './teachSign.css'

//This is the sign in page for teachers
const TeachSign = () => {
    const history = useHistory();
    const ClickTeachForm =() => history.push('/TeachForm');
    const ClickTeachPage = () => history.push('/TeachPage');

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
    
    //This function sends an http request but does not submit data for some reason
    //See if you can correct it and make it so that data is sent to the database with the http request
    //no from validation is implemented here so that needs to be done as well(for now you can type whatever you want and login)
    return (
      <div style={styles.header}>
        <div style={styles.content}>
        <section className="form animated flipInX">
                <h2>Login Teacher Account</h2>
                <p className="valid">Valid. Please wait a moment.</p>
                <p className="error">Error. Please enter correct Username &amp; password.</p>
                <form className="loginbox">
                    <input placeholder="Username" type="text" id="username" required></input>
                    <input placeholder="Password" type="password" id="password" required></input>
                <button id="submit" onClick={ClickTeachPage}>Login</button><br/><br/>
                <p>Are you a new member?</p><br/>
                <button id="sign" onClick={ClickTeachForm}>Sign in</button><br/>
                </form>
                </section>
      	     </div>   
      </div>
    )
}

export default TeachSign
