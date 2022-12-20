import { createAsyncThunk } from '@reduxjs/toolkit';

import { projectsSlice } from './index';

import { projectsInfo } from '../../constants/projects';
import { locales } from '../../contexts/LanguageContext';
import { IShortProjectInfo } from '../../types/IProject';
import { setDelay } from '../utils';

export const loadProjects = createAsyncThunk('projects/loadProjects', async (_, thunkAPI) => {
  thunkAPI.dispatch(projectsSlice.actions.startLoading());

  try {
    const countOnPage = 6;

    const projectsCount = Number(Object(thunkAPI.getState()).projects.entities.length);
    const response = await setDelay(() => {
      const projects = projectsInfo.slice(projectsCount, projectsCount + countOnPage);

      return projects.map((p): IShortProjectInfo => {
        const transformedProject = { ...p } as unknown as IShortProjectInfo;

        transformedProject.imageUrl = transformedProject.imagesUrls != null ? transformedProject.imagesUrls[0] : null;

        for (const key of Object.keys(transformedProject)) {
          if (Object.keys(locales).includes(key)) {
            delete transformedProject[key as keyof typeof locales].link;
          }
        }
        delete transformedProject.imagesUrls;

        return transformedProject;
      });
    });

    thunkAPI.dispatch(projectsSlice.actions.addEntities({ entities: response }));
    if (projectsCount + countOnPage >= projectsInfo.length) thunkAPI.dispatch(projectsSlice.actions.setFull());
    thunkAPI.dispatch(projectsSlice.actions.successLoading());
  } catch (e) {
    thunkAPI.dispatch(projectsSlice.actions.failLoading());
  }
});
