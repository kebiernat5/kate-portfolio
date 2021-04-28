import React from 'react'

function Card() {
    return (
        <div className="card">
            <img src="img_avatar.png" alt="Avatar" style="width:100%"></img>
            <div className="container">
                <h4><b>John Doe</b></h4>
                <p>Architect & Engineer</p>
            </div>
        </div>
    )
}

export default Card;
