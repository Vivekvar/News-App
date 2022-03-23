import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"
import LoadingBar from 'react-top-loading-bar'

export class App extends Component {
  
  apiKey = process.env.REACT_APP_NEWS_API;

  constructor() {
    super();
    this.state = {
      searchQuery: "",
      progress: 0
    }
  }

  handleOnChange = async (userQuery) => {
    await this.setState({
      searchQuery: userQuery
    })
  }

  setProgress = (progress) => {
    this.setState({
      progress: progress
    })
  }
  
  render() {
    return (
      <div>
        <Router>
          <LoadingBar
            color='#f11946'
            progress={this.state.progress}
            onLoaderFinished={() => this.setProgress(0)}
          />
          <Navbar searchQuery={this.state.searchQuery} handleOnChange={this.handleOnChange}/>
          <Switch>
            <Route exact path="/"> <News apiKey={this.apiKey} setProgress={this.setProgress} key="general" category="general" searchQuery={this.state.searchQuery}/></Route>
            <Route exact path="/business"><News apiKey={this.apiKey} setProgress={this.setProgress} key="business" category="business" searchQuery={this.state.searchQuery}/></Route>
            <Route exact path="/entertainment"><News apiKey={this.apiKey} setProgress={this.setProgress} key="entertainment" category="entertainment" searchQuery={this.state.searchQuery}/></Route>
            <Route exact path="/health"><News apiKey={this.apiKey} setProgress={this.setProgress} key="health" category="health" searchQuery={this.state.searchQuery}/></Route>
            <Route exact path="/science"><News apiKey={this.apiKey} setProgress={this.setProgress} key="science" category="science" searchQuery={this.state.searchQuery}/></Route>
            <Route exact path="/sports"><News apiKey={this.apiKey} setProgress={this.setProgress} key="sports" category="sports" searchQuery={this.state.searchQuery}/></Route>
            <Route exact path="/technology"><News apiKey={this.apiKey} setProgress={this.setProgress} key="technology" category="technology" searchQuery={this.state.searchQuery}/></Route>
          </Switch>
        </Router>
      </div>
    )
  }

}

export default App
