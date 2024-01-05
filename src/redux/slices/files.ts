import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { CourtFile } from '../../types';

export const initialState: CourtFile[] = [];

const filesSlice = createSlice({
  name: 'files',
  initialState,
  reducers: {
    setFiles: (_, { payload }: PayloadAction<CourtFile[]>) => payload,
  },
});

export const { setFiles } = filesSlice.actions;
export default filesSlice.reducer;
