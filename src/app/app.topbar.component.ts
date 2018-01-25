import { Component } from '@angular/core';
import { AppComponent } from './app.component';

@Component({
    selector: 'app-topbar',
    templateUrl: './app.topbar.component.html'
})
export class AppTopBarComponent {

    constructor(public app: AppComponent) { }

    themeChange(e) {
        const themeLink: HTMLLinkElement = <HTMLLinkElement>document.getElementById('theme-css');
        let href = themeLink.href;
        let themeFile = href.substring(href.lastIndexOf('/') + 1, href.lastIndexOf('.'));
        let themeTokens = themeFile.split('-');
        let themeName = themeTokens[1];
        let themeMode = themeTokens[2];
        let newThemeMode = (themeMode === 'dark') ? 'light': 'dark';

        this.app.changeTheme(themeName + '-' + newThemeMode);
    }
}
