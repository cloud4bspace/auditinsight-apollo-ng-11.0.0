import {Component} from '@angular/core';
import {AppComponent} from './app.component';

@Component({
    selector: 'app-topbar',
    templateUrl: './app.topbar.component.html'
})
export class AppTopBarComponent {

    constructor(public app: AppComponent) {}

    themeChange(e) {
        let theme, themeStyle;
        const themeLink: HTMLLinkElement = <HTMLLinkElement>document.getElementById('theme-css');
        for (const element of themeLink.href.split('/')) {
          if (element.includes('-')) {
            theme = element.split('-')[1];
            themeStyle = element.split('-')[2].split('.')[0];
          }
        }
        if (themeStyle === 'dark') {
          this.app.changeTheme(theme + '-' + 'light');
        } else {
          this.app.changeTheme(theme + '-' + 'dark');
        }
    }
}
