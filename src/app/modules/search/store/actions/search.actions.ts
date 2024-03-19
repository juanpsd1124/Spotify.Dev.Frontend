import { createAction, props } from "@ngrx/store";

export enum SearchResultsActionTypes {
    LoadResultId = '[Search_Result] Load Result Id',
    LoadResultType = '[Search_Result] Load Artist Id',
}

export const loadResultId = createAction(
    SearchResultsActionTypes.LoadResultId,
    props<{ payload: string }>()
);

export const loadResultType = createAction(
    SearchResultsActionTypes.LoadResultType,
    props<{ payload: string }>()
);

