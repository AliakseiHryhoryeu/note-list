import { NotesActionsTypes } from '../models';
import { RootState } from './index'

const initialState: RootState.NotesState = {
    allNotes: []
}


export const notesReducer = (state = initialState, action) => {
    switch (action.type) {

        case NotesActionsTypes.GET_WEATHER:
            return {
                ...state,
            }
        case NotesActionsTypes.SET_NOTES:
            localStorage.setItem('notes-list', JSON.stringify(state.allNotes))

            return {
                ...state,
            }
        case NotesActionsTypes.GET_NOTES:
            return {
                ...state,
                allNotes: action.payload
            }

        case NotesActionsTypes.ADD_NOTE:
            return {
                ...state,
                allNotes: [...state.allNotes, { ...action.payload }]

            }
        case NotesActionsTypes.DELETE_NOTE:
            const newAllNotes = state.allNotes.filter(item => item.id !== action.payload)
            return {
                ...state,
                allNotes: newAllNotes
            }

        default:
            return state
    }
}