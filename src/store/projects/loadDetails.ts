import { createAsyncThunk } from '@reduxjs/toolkit';

import { projectsSlice } from './index';

import { projectsInfo } from '../../constants/projects';
import { setDelay } from '../utils';

export const loadDetails = createAsyncThunk('projects/loadDetails', async (projectId: number, thunkAPI) => {
  thunkAPI.dispatch(projectsSlice.actions.startLoading());

  try {
    const response = await setDelay(() => projectsInfo.find((p) => p.id === projectId));

    thunkAPI.dispatch(projectsSlice.actions.setDetails({ details: response }));
    thunkAPI.dispatch(projectsSlice.actions.successLoading());
  } catch (e) {
    thunkAPI.dispatch(projectsSlice.actions.failLoading());
  }
});
