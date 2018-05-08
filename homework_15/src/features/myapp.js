import React, { Component } from 'react';
// This plugin automatically reload page on changes
import { hot } from 'react-hot-loader';
import Slist from './app.js';


class App extends Component {
	constructor(props){
		super(props);

	}

	
  render() {
   return (
      <div>
      <div className="container">
      	<div className="amount"></div>
      </div>

      	<Slist />

      </div>
    );
  }
}

// Note: Hot reloading occurs after you save file in the editor.
export default hot(module)(App);