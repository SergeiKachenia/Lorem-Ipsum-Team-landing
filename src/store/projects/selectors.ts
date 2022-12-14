import { IProjectInfo, IShortProjectInfo } from 'types/IProject';

import { projectsSlice } from './index';

import { Statuses } from '../../constants/statuses';
import { AppStateType } from '../index';

const initialState = projectsSlice.getInitialState();
export const selectProjectsModule = (state: AppStateType): typeof initialState => state.projects;

export const selectProjects = (state: AppStateType): IShortProjectInfo[] =>
  Object.values(selectProjectsModule(state).entities);
export const selectDetails = (state: AppStateType): IProjectInfo | null => selectProjectsModule(state).details;
export const selectStatus = (state: AppStateType): typeof Statuses[keyof typeof Statuses] =>
  selectProjectsModule(state).status;
export const selectFull = (state: AppStateType): boolean => state.projects.full;
