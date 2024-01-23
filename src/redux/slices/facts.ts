import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { FactState } from '../../types';

export const initialState: FactState = {
  testimonies: [],
  aspects: [],
};

const factSlice = createSlice({
  name: 'facts',
  initialState,
  reducers: {
    setFacts: (state, { payload }: PayloadAction<FactState>) => ({
      ...state,
      ...payload,
    }),
  },
});

export const { setFacts } = factSlice.actions;
export default factSlice.reducer;
