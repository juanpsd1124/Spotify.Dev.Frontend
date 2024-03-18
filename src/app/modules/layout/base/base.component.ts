import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { AuthService } from '../../auth/services/auth.service';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent {

  /**
   * Metodo constructor para realizar inyeccion de dependencias
   * @param _http Angular Http Client 
   */
  constructor(
    public _activateRoute: ActivatedRoute,
    public _router: Router,
    public _authService: AuthService
  ){}

  /**
   * Method executed at first component execution
   */
  ngOnInit(){
    
    //this._router.navigate(['/home/search'])
  }

  /**
   * Methos used to request a token for API consume
   */
      

  /**
   * Méthod for searching
   */
  // public searchItems():


}
