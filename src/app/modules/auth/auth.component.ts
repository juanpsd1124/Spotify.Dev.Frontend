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
   * Constructor method for dependency injections 
   * @param _authService Auth service
   */
    constructor(
      private _authService: AuthService,
  ){}


  /**
   * Method executed at component creation
   */
  ngOnInit(){
  }

  /**
   * Method for request login
   */
  public loginSpotify(): void {
    this._authService.loginSpotify()
  }


}
