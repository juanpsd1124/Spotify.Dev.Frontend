
import { createSelector } from '@ngrx/store';
import { AppState } from 'src/app/core/store/app.interface';

export const getResultIdValue = (state: AppState) => state.search.resultId;
export const getResultTypeValue = (state: AppState) => state.search.type;

export const getResultId = createSelector(
    getResultIdValue,
    (resultId) => resultId
)

export const getResultValue = createSelector(
    getResultTypeValue,
    (resultType) => resultType
)
