import React, { Component } from 'react';

import Genres from './components/genres.js';
import RecentTracks from './components/recentTracks.js'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Genres />
        <RecentTracks />
      </div>
    );
  }
}

export default App;
