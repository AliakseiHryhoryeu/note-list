import {  combineReducers } from 'redux'
import { RootState } from './state'
import { notesReducer } from './notes'

export { type RootState }


export const rootReducer = combineReducers<RootState>({
    notes: notesReducer,
})


