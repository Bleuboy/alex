import { combineReducers, Reducer } from 'redux';

import { CourtState, FactState, RootState } from '../types';

import documentsReducer from './slices/documents';
import factsReducer from './slices/facts';

// TODO - investigate this type casting
const rootReducer: Reducer<RootState> = combineReducers<RootState>({
  documents: documentsReducer as unknown as CourtState,
  facts: factsReducer as unknown as FactState,
});

export default rootReducer;
