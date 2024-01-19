import { combineReducers, Reducer } from 'redux';

import { CourtState, RootState } from '../types';
import documentsReducer from './slices/documents';

// TODO - investigate this type casting
const rootReducer: Reducer<RootState> = combineReducers<RootState>({
  documents: documentsReducer as unknown as CourtState,
});

export default rootReducer;
