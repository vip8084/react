import React, { Component } from 'react';
import './App.css';
import Movies from './components/Movies';

class App extends Component {
  render() {
    return (
        <main role="main" class="container">
            <h1>Movies</h1>
            <Movies />
        </main>
    );
  }
}

export default App;
