import React, { Component } from 'react';
import Header from './Header'
import { getAll } from '../api/categories'
import '../styles/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: []
    }
  }
  componentDidMount() {
    getAll().then((categories) => {
      console.log(categories);
      this.setState({ categories });
    })
  }
  render() {
    return (
      <div className="App">
        <Header categories={this.state.categories} />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
