import { createAction } from '@reduxjs/toolkit';
// import { INCREMENT, DECREMENT } from './counter-types';

// export const increment = value => ({
//   type: INCREMENT,
//   payload: value,
// });
export const increment = createAction('counter/Increment');

// export const decrement = value => ({
//   type: DECREMENT,
//   payload: value,
// });
export const decrement = createAction('counter/Decrement');
