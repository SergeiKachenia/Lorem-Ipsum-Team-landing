import { IShortProjectInfo } from 'types/IProject';

export const selectProjectsModule = (state: any): any => state.projects;

export const selectProjects = (state: any): IShortProjectInfo[] => Object.values(selectProjectsModule(state).entities);
export const selectStatus = (state: any): any => selectProjectsModule(state).status;
