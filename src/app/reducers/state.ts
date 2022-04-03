import { NotesModel } from './../models';

export namespace RootState {
  export type NotesState = NotesModel[];
}

export interface RootState {
  notes: RootState.NotesState;
  router?: any;
}


