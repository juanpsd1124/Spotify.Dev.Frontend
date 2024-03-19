import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  /**
   * Constructor method for dependency injections 
   * @param _route Angular route injection

   */
  constructor(
    private _route: Router,
  ){}

  /**
   * Method to navigate search page
   */
  public navigateToSearchPage(): void {
    this._route.navigateByUrl("/home/search")

  }

}
