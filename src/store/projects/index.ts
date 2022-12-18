import { createSlice } from '@reduxjs/toolkit';
import { IShortProjectInfo } from 'types/IProject';

import { Statuses } from '../../constants/statuses';

const initialState = {
  entities: [] as IShortProjectInfo[],
  status: Statuses.idle,
};

export const projectsSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    updateEntities: (state, action) => {
      state.entities = [...action.payload.entities];
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
