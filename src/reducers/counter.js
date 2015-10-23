/* @flow */

import { ADD_ONE, ADD_TEN } from '../constants/actionTypes.js';
import type CounterAction from '../actions/counter';

export type CounterState = {
  newCount: number;
};

const initialState: CounterState = {
  newCount: 100,
};

export default function counter(
  state: CounterState = initialState,
  action: CounterAction
): CounterState {
  switch (action.type) {
    case ADD_ONE:
      return {
        ...state,
        newCount: state.newCount + 1,
      };
    case ADD_TEN:
      return {
        ...state,
        newCount: state.newCount + 10,
      };
    default:
      return state
  }
}
