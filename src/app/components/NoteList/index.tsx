import React, { FC, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {useNotesActions} from 'app/actions'
import { RootState } from 'app/reducers'
import { NoteInput } from 'app/components'
import { Note } from 'app/components'

import './NoteList.scss'

export const NoteList:FC = () => {

  const dispatch = useDispatch()
  const notesActions = useNotesActions(dispatch)
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