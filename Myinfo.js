import React from 'react'
import ReactDOM from 'react-dom'

class Myinfo extends React.Component {
    render() {
        return (
            <div>
                <img className="pic" src='./o.png' />
                <h1 className="name">Chris Chan</h1>
                <h2 className="position">Associate QA testser</h2>
                <h3 className="email">chantszto.chris@gmail.com</h3>
                <button className="button"><img src='./email.png' /> Email</button>
            </div>
        )
    }
}

export default Myinfo