import { createSlice } from '@reduxjs/toolkit';
import { IShortProjectInfo } from 'types/IProject';

import { Statuses } from '../../constants/statuses';

const initialState = {
  entities: [] as IShortProjectInfo[],
  status: Statuses.idle,
  full: false,
};

export const projectsSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    updateEntities: (state, action) => {
      const indexes = state.entities.map((el) => el.id);
      const payload = [...action.payload.entities].filter((el) => !indexes.includes(el.id));
      state.entities = [...state.entities].concat(payload);
      if (indexes.length === 9) {
        state.full = true;
      }
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
