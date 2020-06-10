import React from 'react'

function Habits(props){
    return (
        <div style={habitsStyle}>
            <h3>Habit: {props.name}</h3>
            <h3>Target: {props.targetDate}, {props.format}</h3>
            <h3>Accomplished: <input type="checkbox" /></h3>
            <hr/>
        </div>
    )
}

const habitsStyle = {
    background: '#222',
    color: 'whitesmoke',
    textAlign: 'center',
    padding: '60px'
}

export default Habits