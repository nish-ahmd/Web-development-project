import React, { useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom';
import background from './images/background.jpg'
import './studentSign.css'

//This is the student sign in form(account creation form for students)
export const StdForm = () => {
    const history = useHistory();

    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')
    const [fullname,setFullname] = useState('')
    const [batches,setBatches] = useState('')
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
          height: '100%',
          width: '100%',
          backgroundColor: 'rgba(255, 255, 255, 0.3)',
        }
    }
    /*function handleChanges(event){
        const{name,value} =  event.target;

        setValue(prevValues =>{
            return{
                ...prevValues,
                [name] : value
            }
        })
    }*/



    //const [values,setValue] = useState({username:'',password:'',fullname:'',stream:'',batch:''});

    //This is the function to submit data to the database
    const submitForm = e => {
        e.preventDefault();
       const newstd ={
            fullname:fullname,
            batch:batches,
            stream:stream,
            username:username,
            password:password
        }
      

        axios.post(' http://localhost:4005/app/signup',{newstd})
        .then(function(response){
            console.log(response);
            history.push('/stdSign');
        }) 
        console.log(newstd);

        alert('A name was submitted: ');
    }

    const [subs] = useState([
        {id:"1",label:"Physical science", value:"Maths"},
        {id:"2",label:"Biological Science", value:"physics"},
        {id:"3",label:"Othe Stream", value:"chemsitry"},
    ]);

    const [batch] = useState([
        {id:"1",label:" Batch OF 2021 ", value:"Batch OF 2021"},
        {id:"2",label:"Batch OF 2022 ", value:"Batch OF 2022"},
        {id:"3",label:"Batch OF 2023", value:"Batch OF 2023"},
    ]);

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
                     <input placeholder="Fullname" type="text" id="Fullname" value={fullname} required onChange={e=> setFullname(e.target.value)}></input>
                     <select name="subject1" id="subject1" onChange={e=>setStream(e.target.value)}>
                        {subs.map((subs)=>(
                            <option key={Math.random().toString(36).substr(2,9)} value={subs.value}>{subs.label} </option>
                        ))}
                    </select><br/>
                     <select name="subject" id="subject" onChange={e=>setBatches(e.target.value)}>
                        {batch.map((batch)=>(
                            <option key={Math.random().toString(36).substr(2,9)} value={batch.value}>{batch.label}</option>
                        ))}
                    </select><br/>
                    <input placeholder="Username" type="text" id="username" value={username} required onChange={e => setUsername(e.target.value)}></input>
                    <input placeholder="Password" type="password" id="password" value={password} required onChange={e=> setPassword(e.target.value)}></input>
                <button id="sign" onClick={submitForm} >Sign up</button><br/>
                </form>
                </section>
            </div>
        </div>
    )
}

export default StdForm