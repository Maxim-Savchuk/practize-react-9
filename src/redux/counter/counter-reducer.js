import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { increment, decrement } from './counter-actions';
// import { INCREMENT, DECREMENT } from './counter-types';

// const valueReducer = (state = 0, { type, payload }) => {
//   switch (type) {
//     case INCREMENT:
//       return state + payload;

//     case DECREMENT:
//       return state - payload;

//     default:
//       return state;
//   }
// };
const valueReducer = createReducer(0, {
  [increment]: (state, { payload }) => state + payload,
  [decrement]: (state, { payload }) => state - payload,
});

// const stepReducer = (state = 10, action) => state;
const stepReducer = createReducer(10, {});

export default combineReducers({
  value: valueReducer,
  step: stepReducer,
});
