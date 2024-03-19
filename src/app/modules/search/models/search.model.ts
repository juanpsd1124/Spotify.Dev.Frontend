import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { AppState } from "src/app/core/store/app.interface";
import * as searchSelectors from '../store/selectors/search.selectors';
import * as searchActionsTypes from '../store/actions/search.actions';



@Injectable()
export class SearchModel {
    
  /**
   * Constructor method for dependency injections 
   * @param _store Redux app store
   */
  constructor(
    private _store: Store<AppState>,
  ){}

  /**
   * Get result Id selector
   */
  public getResultId$: Observable<string> = this._store.select(searchSelectors.getResultId);

  /**
   * Get result Id selector
   */
  public getResultType$: Observable<string> = this._store.select(searchSelectors.getResultValue);

  /**
   * Method to load result id in redux
   */
  public loadResultId(payload: string){
    this._store.dispatch(searchActionsTypes.loadResultId({ payload }));
  }

  /**
   * Method to load result type in redux
   */
  public loadResultType(payload: string){
    this._store.dispatch(searchActionsTypes.loadResultType({ payload }));
  }

}