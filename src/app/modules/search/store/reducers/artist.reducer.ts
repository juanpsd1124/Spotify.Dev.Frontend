import { Action, createReducer } from "@ngrx/store";



// Interface to define search result state
export interface ArtistResultState {
    resultId: string;
    type: string;
}

export const defaultArtistResultState: ArtistResultState = {
    resultId: null,
    type: null

}

const reducer = createReducer(defaultArtistResultState)

export function artistResultReducer(state: ArtistResultState | undefined, action: Action) {
    return reducer(state, action);
}