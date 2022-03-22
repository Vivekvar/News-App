import React, { Component } from 'react'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import News from './components/News'

export class App extends Component {

  render() {
    return (
      <div>
        <Navbar />
        <News category="general"/>
        <Footer />
      </div>
    )
  }

}

export default App
