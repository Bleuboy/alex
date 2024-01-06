import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { CourtFile, CourtState } from '../../types';

export const initialState: CourtState = {
  previewFile: null,
  courtFiles: [],
};

const documentsSlice = createSlice({
  name: 'files',
  initialState,
  reducers: {
    setPreviewFile: (state, { payload }: PayloadAction<CourtFile | null>) => ({
      ...state,
      previewFile: payload,
    }),
    setCourtFiles: (state, { payload }: PayloadAction<CourtFile[]>) => ({
      ...state,
      courtFiles: payload,
    }),
  },
});

export const { setPreviewFile, setCourtFiles } = documentsSlice.actions;
export default documentsSlice.reducer;
