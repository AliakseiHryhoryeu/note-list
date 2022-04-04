import React, { FC, useEffect } from 'react'
import { NoteInput } from '..'
import { Note } from '..'
import { useDispatch, useSelector } from 'react-redux';

import {useNotesActions} from 'app/actions'
import { RootState } from 'app/reducers';

import './NoteList.scss'


export const NoteList:FC = () => {

  const dispatch = useDispatch();
  const notesActions = useNotesActions(dispatch);
  const { notes } = useSelector((state: RootState) => {
    return {
      notes: state.notes.allNotes,
    }
  })

  useEffect(() => {
    notesActions.getNotes()
  }, [])


  return (
    <div className='notelist'>

      <Note notes={notes} />
      <NoteInput />
    </div>
  )
}

