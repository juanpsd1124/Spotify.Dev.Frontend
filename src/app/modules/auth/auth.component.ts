import { Component } from '@angular/core';
import { AuthModule } from './auth.module';
import { AuthService } from './services/auth.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {

  /**
   * Metodo constructor para realizar inyeccion de dependencias
   * @param _http Angular Http Client 
   */
    constructor(
      private _authService: AuthService,
      public _router: ActivatedRoute
  ){}


  ngOnInit(){



  }


  public subscripcionRuta(): void {

  }
    

  public loginSpotify(): void {
    this._authService.loginSpotify()
    
  }


}
