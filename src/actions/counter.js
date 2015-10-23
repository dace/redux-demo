/* @flow */

import {
  ADD_ONE,
  ADD_TEN,
} from '../constants/actionTypes';

export type CounterAction = {
  type: string;
};

export function addOne(): CounterAction {
  return {
    type: ADD_ONE
  }
}

export function addTen(): CounterAction {
  return {
    type: ADD_TEN
  }
}
