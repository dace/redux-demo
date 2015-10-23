import React, { Component } from 'react';
import Counter from './Counter';

export class ReduxCounter extends Component {
  render() {

    console.log('This.props from Redux Counter.js:')
    console.log(this.props)
    return (
      <div>
        <h1>Redux test - simple counter:</h1>
        <Counter/>
      </div>
    );
  }
}
