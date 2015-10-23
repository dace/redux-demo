import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as counterActions from '../actions/counter';

function mapStateToProps(state) {
  return {
    counter: state.counter.newCount,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    ...bindActionCreators(counterActions, dispatch),
  };
}

@connect(mapStateToProps, mapDispatchToProps)

export default class Counter extends Component {
  static propTypes = {
    counter: PropTypes.number.isRequired,
    addOne: PropTypes.func.isRequired,
    addTen: PropTypes.func.isRequired,
  };

  render() {
    return (
      <div>
        <h1>{this.props.counter}</h1>
        <button onClick={() => this.props.addOne()}>add one</button>
        <button onClick={() => this.props.addTen()}>add ten</button>
      </div>
    )
  }
}
