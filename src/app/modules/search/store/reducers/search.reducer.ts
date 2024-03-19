
import { Action, createReducer, on } from "@ngrx/store";
import { ArtistResultState, artistResultReducer, defaultArtistResultState } from "./artist.reducer"
import * as searchActionsTypes from '../actions/search.actions';

export interface SearchState {
    resultId: string;
    type: string;

}

/**
 * Results interface default state
 */
export const searchInitialState: SearchState = {
    resultId: null,
    type: null
}

/**
 * Search reducer
 */
const reducer = createReducer(searchInitialState,
    on(searchActionsTypes.loadResultId, (state, {payload}) => ({
        ...state,
        resultId: payload
    })),
    on(searchActionsTypes.loadResultType, (state, {payload}) => ({
        ...state,
        type: payload
    })),
)

/**
 * Reducer funtions to manage search state and actions
 * @param state actual state
 * @param action action to dispatch
 * @returns new state
 */
export function searchReducer(state: SearchState , action: Action) {
    return reducer(state,action)
}