import { combineReducers, Reducer } from 'redux';

import { RootState } from '../types';

import documentsReducer from './slices/documents';

const rootReducer: Reducer<RootState> = combineReducers<RootState>({
  documents: documentsReducer,
});

export default rootReducer;
