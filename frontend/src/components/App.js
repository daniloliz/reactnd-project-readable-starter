import React, { Component } from 'react';
import Header from './Header';
import Coments from './Coments'
import Home from './Home';
import { getAll } from '../api/categories';
import '../styles/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      openComents: true
    }
  }
  componentDidMount() {
    getAll().then((categories) => {
      this.setState({ categories });
    })
  }
  handleToggleComents = () => this.setState({openComents: !this.state.openComents});
  render() {
    return (
      <div>
        <Header categories={this.state.categories} />
        <div className="App-intro">
          <Home categories={this.state.categories} />
        </div>
        <Coments openComents={this.state.openComents} />
      </div>
    );
  }
}

export default App;
