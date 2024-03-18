import { ActionReducerMap } from "@ngrx/store";
import { AppState } from "./app.interface";
import { searchReducer } from "src/app/modules/search/store/reducers/search.reducer";

export const appReducers: ActionReducerMap<AppState | any> = {
    search: searchReducer

}