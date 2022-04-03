import React, { FC, useEffect, useState } from 'react'
import { NoteInput } from '..'
import { Note } from '..'
import { useDispatch, useSelector } from 'react-redux';

import {useNotesActions} from 'app/actions'
import { RootState } from 'app/reducers';

import './NoteList.scss'


export const NoteList = () => {

  // const dispatch = useDispatch();
  // const notesActions = useNotesActions(dispatch);
  // const { notes } = useSelector((state: RootState) => {
  //   return {
  //     notes: state.notes,
  //   };
  // });

  // notesActions.addNote()
  // useEffect(() => {
  //   const saved = JSON.parse(localStorage.getItem('notes-list') || '[]') as INote[]
  //   setNotes(saved)
  // }, [])

  // useEffect(() => {
  //   localStorage.setItem('notes-list', JSON.stringify(notes))
  // }, [notes])

  return (
    <div className='notelist'>
      {/* <Note 
        id='1'
        text='Lorem Ipsum is simply dummy text of the printing and typesetting industry'
        imageUrl= 'https://openweathermap.org/img/wn/11d@4x.png'
        temperature='1.72'
        date={1648988884}
      /> */}
      {/* <Note notes={notes} /> */}
      <NoteInput />
    </div>
  )
}

