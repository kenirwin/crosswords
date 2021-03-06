import React from 'react';
import { Route } from 'react-router-dom';

import { Home } from 'pages/Home/Home';
import { Puzzle } from 'pages/Puzzle/Puzzle';


export class App extends React.Component {
  render() {
    return (
      <div>
        <Route path="/home" component={Home} />
        <Route path="/puzzle/:puzzleName" component={Puzzle} />
      </div>
    );
  }
}
