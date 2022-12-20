import { createAsyncThunk } from '@reduxjs/toolkit';

import { projectsSlice } from './index';

import { shortProjectsInfo } from '../../constants/projects';
import { setDelay } from '../utils';

export const loadProjects = createAsyncThunk('projects/loadProjects', async (_, thunkAPI) => {
  thunkAPI.dispatch(projectsSlice.actions.startLoading());

  try {
    const countOnPage = 6;

    const projectsCount = Number(Object(thunkAPI.getState()).projects.entities.length);
    const response = await setDelay(() => shortProjectsInfo.slice(projectsCount, projectsCount + countOnPage));

    thunkAPI.dispatch(projectsSlice.actions.addEntities({ entities: response }));
    if (projectsCount + countOnPage >= shortProjectsInfo.length) thunkAPI.dispatch(projectsSlice.actions.setFull());
    thunkAPI.dispatch(projectsSlice.actions.successLoading());
  } catch (e) {
    thunkAPI.dispatch(projectsSlice.actions.failLoading());
  }
});
