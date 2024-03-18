import { Action, createReducer } from "@ngrx/store";



export interface ArtistResultState {
    selectedArtist: any;

}

export const defaultArtistResultState: ArtistResultState = {
    selectedArtist: null
}

const reducer = createReducer(defaultArtistResultState)

export function artistResultReducer(state: ArtistResultState | undefined, action: Action) {
    return reducer(state, action);
}