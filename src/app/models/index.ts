export interface NotesModel {
    id: string
    text: string
    imageUrl: string
    temperature: string
    date: number
}

export enum NotesActionsTypes {
    SET_NOTES = 'NOTE/SET_NOTES',
    GET_NOTES = 'NOTE/GET_NOTES',
    GET_WEATHER = 'NOTE/GET_WEATHER',
    GET_ICON_WEATHER = 'NOTE/GET_ICON_WEATHER',
    ADD_NOTE = 'NOTE/ADD_NOTE',
    DELETE_NOTE = 'NOTE/DELETE_NOTE',
}