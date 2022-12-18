import { createAsyncThunk } from '@reduxjs/toolkit';

import { projectsSlice } from './index';

import { shortProjectsInfo } from '../../constants/projects';
import { setDelay } from '../utils';

export const loadProjects = createAsyncThunk('projects/loadProjects', async (_, thunkAPI) => {
  thunkAPI.dispatch(projectsSlice.actions.startLoading());

  try {
    const projects = Number(Object(thunkAPI.getState()).projects.entities.length);
    const response = await setDelay(() => shortProjectsInfo.slice(projects, projects + 6));

    thunkAPI.dispatch(projectsSlice.actions.updateEntities({ entities: response }));
    thunkAPI.dispatch(projectsSlice.actions.successLoading());
  } catch (e) {
    thunkAPI.dispatch(projectsSlice.actions.failLoading());
  }
});
