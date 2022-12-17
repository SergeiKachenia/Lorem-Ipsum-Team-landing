import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { projectsSlice } from './projects';

const reducer = combineReducers({
  projects: projectsSlice.reducer,
});

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export type AppDispatch = typeof store.dispatch;
