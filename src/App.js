import React, { Component } from 'react';
import './App.css';
import CartList from './components/CartList'


class App extends Component {
  render () {
    return (
      <div className="App">
        <CartList store={this.props.store}/>
      </div>
    );
  }
}

export default App;
