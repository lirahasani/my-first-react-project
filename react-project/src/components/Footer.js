import React from 'react'

function Footer(){
    return (
        <div style={footerStyle}>
            <footer>
                <p>Footer</p>
            </footer>
        </div>
    )
}

const footerStyle = {
    background: '#333',
    color: 'whitesmoke',
    textAlign: 'center',
    padding: '10px'
}

export default Footer