import { createAsyncThunk } from '@reduxjs/toolkit';

import { projectsSlice } from './index';

import { shortProjectsInfo } from '../../constants/projects';
import { setDelay } from '../utils';

export const loadProjects = createAsyncThunk('projects/loadProjects', async (_, thunkAPI) => {
  thunkAPI.dispatch(projectsSlice.actions.startLoading());

  try {
    const response = await setDelay(() => shortProjectsInfo);

    thunkAPI.dispatch(projectsSlice.actions.updateEntities({ entities: response }));
    thunkAPI.dispatch(projectsSlice.actions.successLoading());
  } catch (e) {
    thunkAPI.dispatch(projectsSlice.actions.failLoading());
  }
});
