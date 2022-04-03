import React, { FC } from 'react'
// import { useDispatch } from 'react-redux'
// import { deleteNote } from '../../redux/actions/notesActions'

// import testWeatherIcon from 'assets/img/testWeatheIcon.png'
// import closeIcon from 'assets/img/close-cross.svg'
import { NotesModel } from 'app/models'

import './Note.scss'

type NoteProps = {
  notes: NotesModel[]
}

export const Note: FC<NoteProps> = ({ notes }) => {
  // const id = notes[0].id
  // const text = notes[0].text
  // const imageUrl = notes[0].imageUrl
  // const temperature = notes[0].temperature
  // const date = notes[0].date

  // const dispatch = useDispatch()

  // const dateConvert = new Date(date * 1000)
  // const monthNames = ["January", "February", "March", "April", "May", "June",
  //   "July", "August", "September", "October", "November", "December"]

  // const day = dateConvert.getUTCDate()
  // const month = monthNames[(dateConvert.getUTCMonth())].substring(0, 3)
  // const year = dateConvert.getUTCFullYear()
  // const hours = dateConvert.getHours()
  // const minutes = dateConvert.getMinutes()
console.log(notes)
  return (
    <div className="note">
test
    </div>
  )
}


{/* <div className="note">
<div className="note__text">
  <p>{text}</p>
</div>
<div className="note__weather">
  <img src={imageUrl} alt="weather icon" />
  <p>{temperature}°C</p>
  <p>{day} {month} {year}</p>
  <p>{hours}:{minutes}</p>
</div>
<div
  className="note__close"
  onClick={() => dispatch(deleteNote(id))}
>
  <img
    src={closeIcon} alt="delete icon"
  />
</div>
</div> */}
