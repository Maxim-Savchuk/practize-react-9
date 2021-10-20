import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';

import counterReducer from './counter/counter-reducer';

const middleware = [...getDefaultMiddleware(), logger]; // Добавили логер в наш стек прослоек

// const rootReducer = combineReducers({
//   counter: counterReducer,
// });

// const store = createStore(rootReducer, composeWithDevTools());

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development', //Включеные дев-тулзы только в розработке
});

export default store;
