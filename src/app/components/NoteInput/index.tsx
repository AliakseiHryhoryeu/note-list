import React, { FC, useState } from 'react'
import { useDispatch } from 'react-redux'

import inputbtn from 'assets/img/inputbtn.png'
import classNames from 'classnames'

import './NoteInput.scss'
import { useNotesActions } from 'app/actions'


export const NoteInput: FC = () => {
  const [inputValue, setInputValue] = useState<string>('')
  const [inputLimit, setInputLimit] = useState<boolean>(false)
  const [inputLimitValue, setInputLimitValue] = useState<number>(0)

  const dispatch = useDispatch();
  const notesActions = useNotesActions(dispatch);

  const addNoteHandler = (text: string) => {
    changeInputHandler('')
    dispatch(notesActions.addNote(text))
  }

  const keyPressHandler = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      addNoteHandler(inputValue)
    }
  }

  const changeInputHandler = (value) => {
    setInputValue(value)
    setInputLimitValue(value.split('').length)
    if (value.split('').length > 300) {
      setInputLimit(true)
    } else {
      setInputLimit(false)
    }
  }
  return (
    <div className='noteinput'>
      <div className={classNames('noteinput__warn', { 'noteinput-warn-color-red': inputLimit })}>
        Maximum note size - 300 chars
      </div>
      <div className="noteinput__text">
        <div>Add note</div>
        <div className={classNames({ 'noteinput-warn-color-red': inputLimit })}>{inputLimitValue}/300</div>
      </div>
      <div className={classNames('noteinput__input', { 'noteinput-warn-bg-red': inputLimit })}>
        <input
          className=''
          type="text"
          placeholder='Enter your note...'
          value={inputValue}
          onChange={e => changeInputHandler(e.target.value)}
          onKeyPress={keyPressHandler}
        />
        <img src={inputbtn} alt=""
          onClick={e => addNoteHandler(inputValue)}
        />

      </div>
    </div>
  )
}
