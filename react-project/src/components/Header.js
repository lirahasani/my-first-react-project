import React from 'react'

function Header(){
    return <p style={headerStyle}>HEADER</p>
}

const headerStyle = {
    background: '#333',
    color: 'whitesmoke',
    textAlign: 'center',
    padding: '10px'
}

export default Header