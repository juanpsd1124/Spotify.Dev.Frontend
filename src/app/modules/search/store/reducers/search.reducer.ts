

/**
 * Search interface to manage results entities state
 */

import { Action, combineReducers } from "@ngrx/store"
import { ArtistResultState, artistResultReducer, defaultArtistResultState } from "./artist.reducer"

export interface SearchState {
    artistResult: ArtistResultState
}

/**
 * Results interface default state
 */
export const searchInitialState: SearchState = {
    artistResult: defaultArtistResultState

}

/**
 * Search reducer
 */
const reducer = combineReducers<SearchState>({
    artistResult: artistResultReducer
})

/**
 * Reducer funtions to manage search state and actions
 * @param state actual state
 * @param action action to dispatch
 * @returns new state
 */
export function searchReducer(state: SearchState , action: Action) {
    return reducer(state,action)
}