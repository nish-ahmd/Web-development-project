import React from 'react';
import Button from './Button';
import { useHistory } from 'react-router-dom';
import background from './images/background.jpg'

//This is the first page you see when you start the program
const Header = (props) => {
    const history = useHistory();
    const ClickTeacher = () => history.push('/teachSign');
    const ClickStudent = () => history.push('/stdSign');

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

    return (
        <div style={styles.header}>
            <div style={styles.content}>
            <div className="front" style={{position:'relative',top:'60px'}}>
            <br/><br/><br/><br/><br/>
            <h1 style = {{color:props.color, fontSize: props.fontSize, fontFamily:props.fontFamily}}>Welcome to CWC</h1>
            <h3 style={{fontFamily:'Arial'}}>ONLINE LEARNING PLATFORM</h3><br/><br/>
            <h1 style = {{color:'black', fontFamily:'Arial', fontSize:'50px'}}>LOGIN AS A</h1><br/><br/>
            <div className="buttonContainer">
                <Button onClick={ClickStudent} text="Student" width="300px"  height="50px"/>
                <Button onClick={ClickTeacher} text="Teacher" width="300px" height="50px"/>
            </div>
        </div>
            </div>
        </div>
    )
}

Header.defaultProps = {
    color:'#990099',
    fontFamily:'Arial',
    fontSize: '80px'
}
export default Header
