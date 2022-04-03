import { NotesActionsTypes } from '../models';
import { RootState } from './index'


const initialState: RootState.NotesState = [
    {
        "id": "111",
        "text": "text1",
        "imageUrl": "",
        "temperature": "16.2",
        "date": 1648988884
    },
    {
        "id": "122",
        "text": "text2",
        "imageUrl": "",
        "temperature": "16.2",
        "date": 1628988884
    },
    {
        "id": "133",
        "text": "text3",
        "imageUrl": "",
        "temperature": "16.2",
        "date": 1608988884
    },
]




export function notesReducer(state = initialState, action) {
    switch (action.type) {
        case NotesActionsTypes.SET_NOTES:
            return {
                ...state,
                allNotes: action.payload
            }
        case NotesActionsTypes.GET_NOTES:
            return {
                ...state,
                allNotes: action.payload
            }
        case NotesActionsTypes.GET_WEATHER:
            return {
                ...state,
                allNotes: action.payload

            }
        case NotesActionsTypes.GET_ICON_WEATHER:
            return {
                ...state,
                allNotes: action.payload
            }
        case NotesActionsTypes.ADD_NOTE:
            return {
                ...state,
                allNotes: action.payload
            }
        case NotesActionsTypes.DELETE_NOTE:
            return {
                ...state,
                allNotes: action.payload
            }

        default:
            return state
    }
}