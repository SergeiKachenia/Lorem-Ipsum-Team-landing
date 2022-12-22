import { createSlice } from '@reduxjs/toolkit';
import { IProjectInfo, IShortProjectInfo } from 'types/IProject';

import { Statuses } from '../../constants/statuses';

const initialState = {
  entities: [] as IShortProjectInfo[],
  details: null as IProjectInfo | null,
  status: Statuses.idle,
  full: false,
};

export const projectsSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    addEntities: (state, action) => {
      const ids = state.entities.map((el) => el.id);
      const filteredEntities = [...action.payload.entities].filter((el) => !ids.includes(el.id));
      state.entities = [...state.entities, ...filteredEntities];
    },
    setDetails: (state, action) => {
      if (state.details !== null) {
        if (action.payload.details.id === state.details.id) {
          return;
        }
      }
      state.details = action.payload.details;
    },
    resetDetails: (state) => {
      state.details = null;
    },
    setFull: (state) => {
      state.full = true;
    },
    startLoading: (state) => {
      state.status = Statuses.inProgress;
    },
    successLoading: (state) => {
      state.status = Statuses.success;
    },
    failLoading: (state) => {
      state.status = Statuses.failed;
    },
  },
});
