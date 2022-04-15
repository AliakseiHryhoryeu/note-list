import React, { FC } from 'react'
import { useDispatch } from 'react-redux'

import { NotesModel } from 'app/models'
import { useNotesActions } from 'app/actions'

import closeIcon from 'assets/img/close-cross.svg'

import './Note.scss'


type NoteProps = {
  notes: NotesModel[]
}

export const Note: FC<NoteProps> = ({ notes }) => {

  const dispatch = useDispatch()
  const notesActions = useNotesActions(dispatch)

  const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"]

    const removeNoteHandler = (id:string) => {
      if (window.confirm('Are you sure you want to delete this note?')) {
        dispatch(notesActions.deleteNote(id))
      }
  }

  if (!notes.length) {
    return (
      <div className="note-empty">
        Notes is empty...
      </div>
    )
  }

  return (
    <>
      {notes.map(note => {
        { note.date = new Date(note.date) }

        return ((
          <div className="note" key={note.id}>
            <div className="note__text">
              <p>{note.text}</p>
            </div><div className="note__weather">
              <img src={note.imageUrl} alt="weather icon" />
              <p>{note.temperature}°C</p>
              <p>{(String("0" + note.date.getUTCDate()).slice(-2))} {monthNames[(note.date.getUTCMonth())].substring(0, 3)} {note.date.getUTCFullYear()}</p>
              <p>{note.date.getHours()}:{(String("0" + note.date.getUTCMinutes()).slice(-2))}</p>
            </div>
            <div
              className="note__close"
              onClick={() => removeNoteHandler(note.id)}
            >
              <img
                src={closeIcon} alt="delete icon" />
            </div>
          </div>
        ))
      })
      }
    </>
  )
}