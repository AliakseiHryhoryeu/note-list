/* eslint-disable @typescript-eslint/no-redeclare */

import { useMemo } from 'react';
import { Dispatch, bindActionCreators } from 'redux';
import { createAction } from 'redux-actions';
import { NotesModel } from 'app/models';

import axios from 'axios'

import config from '../../assets/config.json'
import { NotesActionsTypes } from '../models/'




export namespace NotesActions {
    export enum Type {
        SET_NOTES = 'NOTE/SET_NOTES',
        GET_NOTES = 'NOTE/GET_NOTES',
        GET_WEATHER = 'NOTE/GET_WEATHER',
        GET_ICON_WEATHER = 'NOTE/GET_ICON_WEATHER',
        ADD_NOTE = 'NOTE/ADD_NOTE',
        DELETE_NOTE = 'NOTE/DELETE_NOTE',
    }

    export const getWeather = () => {
        return async dispatch => {
            try {
                const response = await axios.get(config.weatherReq.url, {
                    params: {
                        'lat': config.weatherReq.lat,
                        'lon': config.weatherReq.lon,
                        'appid': config.weatherReq.appid,
                        'units': config.weatherReq.units,
                        'lang': config.weatherReq.lang,
    
                    }
                })
                dispatch({ type: NotesActionsTypes.GET_WEATHER, payload: response.data.current })
            } catch (e) {
                console.log(e)
            }
        }
    }
    
    export const getWeatherIcon = (iconId) => {
        return async dispatch => {
            try {
                const response = config.weatherIconReq.url + `${iconId}@4x.png`
                dispatch({ type: NotesActionsTypes.GET_ICON_WEATHER, payload: response })
            } catch (e) {
                console.log(e)
            }
    
        }
    }
    
    export const setNotes = (notes: []) => {
        return async dispatch => {
            try {
                localStorage.setItem('notes-list', JSON.stringify(notes))
                dispatch({ type: NotesActionsTypes.SET_NOTES })
            } catch (e) {
                console.log(e)
            }
        }
    }
    
    export const getNotes = () => {
        return async dispatch => {
            try {
                const response = JSON.parse(localStorage.getItem('notes-list') || '[]') as NotesModel[]
    
                dispatch({ type: NotesActionsTypes.GET_NOTES, payload: response })
            } catch (e) {
                console.log(e)
            }
        }
    }
    
    export const addNote = () => {
        return async dispatch => {
            try {
                const response = config.weatherIconReq.url + `@4x.png`
                dispatch({ type: NotesActionsTypes.ADD_NOTE, payload: response })
            } catch (e) {
                console.log(e)
            }
    
        }
    }
    
    export const deleteNote = (id: string) => {
        return async dispatch => {
            try {
    
                dispatch({ type: NotesActionsTypes.DELETE_NOTE, payload: id })
            } catch (e) {
                console.log(e)
            }
    
        }
    }

    // export const addTodo = createAction<PartialPick<TodoModel, 'text'>>(Type.ADD_TODO);
    // export const editTodo = createAction<PartialPick<TodoModel, 'id'>>(Type.EDIT_TODO);
    // export const deleteTodo = createAction<TodoModel['id']>(Type.DELETE_TODO);
    // export const completeTodo = createAction<TodoModel['id']>(Type.COMPLETE_TODO);
    // export const completeAll = createAction(Type.COMPLETE_ALL);
    // export const clearCompleted = createAction(Type.CLEAR_COMPLETED);

}

export type NotesActions = Omit<typeof NotesActions, 'Type'>;
export const useNotesActions = (dispatch: Dispatch) => {
    const { Type, ...actions } = NotesActions;
    return useMemo(() => bindActionCreators(actions as any, dispatch), [dispatch]) as NotesActions;
}