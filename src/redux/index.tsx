import { combineReducers, Reducer } from 'redux';

import { RootState } from '../types';

import filesReducer from './slices/files';

const rootReducer: Reducer<RootState> = combineReducers<RootState>({
  files: filesReducer,
});

export default rootReducer;
