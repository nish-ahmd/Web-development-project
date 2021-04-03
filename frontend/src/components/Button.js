import React from 'react'
//This component can be used whenever a button is needed
const Button = (props) => {
    return (
        <div>
            <button onClick = {props.onClick} className='btn' style={{width:props.width, height:props.height, margin:props.margin}}>{props.text}</button>
        </div>
    )
}

Button.defaultProps = {
    width: '125px',
    height:'40px',
    margin:'10px',
    text: 'Click'
}

export default Button