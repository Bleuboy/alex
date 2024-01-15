import { combineReducers, Reducer } from 'redux';

import { CourtFile, RootState } from '../types';
import filesReducer from './slices/files';

// TODO - investigate this type casting
const rootReducer: Reducer<RootState> = combineReducers<RootState>({
  files: filesReducer as unknown as CourtFile[],
});

export default rootReducer;
