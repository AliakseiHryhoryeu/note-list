import { NotesModel } from 'app/models'

export namespace RootState {
  export type NotesState = {
    allNotes:NotesModel[]
  }

}

export interface RootState {
  notes: RootState.NotesState
  router?: any
}