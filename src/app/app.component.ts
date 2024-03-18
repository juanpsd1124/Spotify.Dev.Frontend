import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'SpotifyDevApp';

  /**
   * Metodo constructor del componente inicial para
   * iniciar la aplicacion
   * @param _iconRegistry accede a las propiedades de registro de rutas
   * @param _sanitizer accede a las propiedades del DOM
   */
  constructor(private _iconRegistry: MatIconRegistry,
              private _sanitizer: DomSanitizer
  ) {
    this.registerIcons();
    //this.translate.setDefaultLang('es');
  }

  private registerIcons(): void {

    this._iconRegistry.addSvgIcon('1', this._sanitizer.bypassSecurityTrustResourceUrl('assets/images/svg/1.svg'))
    this._iconRegistry.addSvgIcon('2', this._sanitizer.bypassSecurityTrustResourceUrl('assets/images/svg/2.svg'))
    this._iconRegistry.addSvgIcon('3', this._sanitizer.bypassSecurityTrustResourceUrl('assets/images/svg/3.svg'))
  }











}
