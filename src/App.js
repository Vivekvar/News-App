import React, { Component } from 'react'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import News from './components/News'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

export class App extends Component {
  
  constructor() {
    super();
    this.state = {
      searchQuery: ""
    }
  }

  handleOnChange = async (userQuery) => {
    console.log(userQuery);
    await this.setState({
      searchQuery: userQuery
    })
  }

  render() {
    return (
      <div>
        <Router>
          <Navbar searchQuery={this.state.searchQuery} handleOnChange={this.handleOnChange}/>
          <Switch>
            <Route exact path="/"> <News key="general" category="general" searchQuery={this.state.searchQuery}/></Route>
            <Route exact path="/business"><News key="business" category="business" searchQuery={this.state.searchQuery}/></Route>
            <Route exact path="/entertainment"><News key="entertainment" category="entertainment" searchQuery={this.state.searchQuery}/></Route>
            <Route exact path="/health"><News key="health" category="health" searchQuery={this.state.searchQuery}/></Route>
            <Route exact path="/science"><News key="science" category="science" searchQuery={this.state.searchQuery}/></Route>
            <Route exact path="/sports"><News key="sports" category="sports" searchQuery={this.state.searchQuery}/></Route>
            <Route exact path="/technology"><News key="technology" category="technology" searchQuery={this.state.searchQuery}/></Route>
          </Switch>
          <Footer />
        </Router>
      </div>
    )
  }

}

export default App
