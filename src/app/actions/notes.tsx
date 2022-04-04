import { useMemo } from 'react';
import { Dispatch, bindActionCreators } from 'redux';
import axios from 'axios'

import { NotesModel } from 'app/models';
import { NotesActionsTypes } from 'app/models/'

import config from 'assets/config.json'


export namespace NotesActions {
    export enum Type {
        SET_NOTES = 'NOTE/SET_NOTES',
        GET_NOTES = 'NOTE/GET_NOTES',
        GET_WEATHER = 'NOTE/GET_WEATHER',
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
                dispatch({ type: NotesActionsTypes.GET_WEATHER })
                return response.data.current
            } catch (e) {
                console.log(e)
            }
        }
    }


    export const setNotes = () => {
        return async dispatch => {
            try {
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

    export const addNote = (textinput: string) => {
        return async dispatch => {
            try {

                const data = await dispatch(getWeather())

                const id = String(Date.now())
                const text = textinput
                const imageUrl = await config.weatherIconReq.url + data.weather[0].icon + `@4x.png`
                const temperature = await data.temp
                const date = new Date()

                let response: NotesModel = {
                    id: id,
                    text: text,
                    imageUrl: imageUrl,
                    temperature: temperature,
                    date: date
                }
                dispatch({ type: NotesActionsTypes.ADD_NOTE, payload: response })
                dispatch(setNotes())
            } catch (e) {
                console.log(e)
            }
        }
    }

    export const deleteNote = (id: string) => {
        return async dispatch => {
            try {

                dispatch({ type: NotesActionsTypes.DELETE_NOTE, payload: id })
                dispatch(setNotes())
            } catch (e) {
                console.log(e)
            }
        }
    }


}

export type NotesActions = Omit<typeof NotesActions, 'Type'>;
export const useNotesActions = (dispatch: Dispatch) => {
    const { Type, ...actions } = NotesActions;
    return useMemo(() => bindActionCreators(actions as any, dispatch), [dispatch]) as NotesActions;
}