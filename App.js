import React from 'react'
import ReactDOM from 'react-dom'
import Myinfo from './Myinfo.js'
import About from './About.js'
import Myhobby from './Myhobby.js'
import Footer from './Footer.js'

class App extends React.Component {
    render() {
        return (
            <div className="layout">
                <Myinfo />
                <About />
                <Myhobby />
                <Footer />
            </div>
        )
    }
}

export default App