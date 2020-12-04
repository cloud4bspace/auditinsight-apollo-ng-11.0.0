import {Component, OnInit} from '@angular/core';
import { AppMainComponent } from './app.main.component';

@Component({
    selector: 'app-config',
    template: `
        <div class="layout-config" [ngClass]="{'layout-config-active': app.configActive}" (click)="app.onConfigClick($event)">
            <a style="cursor: pointer" id="layout-config-button" class="layout-config-button" (click)="onConfigButtonClick($event)">
                <i class="pi pi-cog"></i>
            </a>
            <a style="cursor: pointer" class="layout-config-close" (click)="onConfigCloseClick($event)">
                <i class="pi pi-times"></i>
            </a>

            <div class="layout-config-content">

                <h5>Color Mode</h5>
                <div class="p-field-radiobutton">
                    <p-radioButton name="colorScheme" value="dark" [(ngModel)]="app.colorScheme" inputId="theme1" (onClick)="app.changeColorScheme('dark')"></p-radioButton>
                    <label for="theme1">Dark</label>
                </div>
                <div class="p-field-radiobutton">
                    <p-radioButton name="colorScheme" value="dim" [(ngModel)]="app.colorScheme" inputId="theme2" (onClick)="app.changeColorScheme('dim')"></p-radioButton>
                    <label for="theme2">Dim</label>
                </div>
                <div class="p-field-radiobutton">
                    <p-radioButton name="colorScheme" value="light" [(ngModel)]="app.colorScheme" inputId="theme3" (onClick)="app.changeColorScheme('light')"></p-radioButton>
                    <label for="theme3">Light</label>
                </div>

                <h5>Menu Mode</h5>
                <div class="p-field-radiobutton">
                    <p-radioButton name="menuMode" value="static" [(ngModel)]="app.menuMode" inputId="mode1"></p-radioButton>
                    <label for="mode1">Static</label>
                </div>
                <div class="p-field-radiobutton">
                    <p-radioButton name="menuMode" value="overlay" [(ngModel)]="app.menuMode" inputId="mode2"></p-radioButton>
                    <label for="mode2">Overlay</label>
                </div>
                <div class="p-field-radiobutton">
                    <p-radioButton name="menuMode" value="horizontal" [(ngModel)]="app.menuMode" inputId="mode3"></p-radioButton>
                    <label for="mode3">Horizontal</label>
                </div>
                <div class="p-field-radiobutton">
                    <p-radioButton name="menuMode" value="slim" [(ngModel)]="app.menuMode" inputId="mode4"></p-radioButton>
                    <label for="mode4">Slim</label>
                </div>

                <h5 style="margin-top: 0">Input Background</h5>
                <div class="p-field-radiobutton">
                    <p-radioButton name="inputStyle" value="outlined" [(ngModel)]="app.inputStyle" inputId="inputStyle1"></p-radioButton>
                    <label for="inputStyle1">Outlined</label>
                </div>
                <div class="p-field-radiobutton">
                    <p-radioButton name="inputStyle" value="filled" [(ngModel)]="app.inputStyle" inputId="inputStyle2"></p-radioButton>
                    <label for="inputStyle2">Filled</label>
                </div>

                <h5>Ripple Effect</h5>
                <p-inputSwitch [ngModel]="app.ripple" (onChange)="app.onRippleChange($event)"></p-inputSwitch>


                <h5>Component Themes</h5>
                <div class="layout-themes">
                    <div *ngFor="let theme of themes">
                        <a style="cursor: pointer" (click)="app.onThemeChange(theme.name)" [ngStyle]="{'background-color': theme.color}">
                            <i class="pi pi-check" *ngIf="app.theme === theme.name"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    `
})
export class AppConfigComponent implements OnInit {

    themes: any[];

    constructor(public app: AppMainComponent) {}

    ngOnInit() {
        this.themes = [
            {title: 'Blue', name: 'blue', color: '#39a3f4'},
            {title: 'Green', name: 'green', color: '#6ebc3b'},
            {title: 'Cyan', name: 'cyan', color: '#1989AC'},
            {title: 'Purple', name: 'purple', color: '#7E57C2'},
            {title: 'Indigo', name: 'indigo', color: '#5C6BC0'},
            {title: 'Yellow', name: 'yellow', color: '#ffc800'},
            {title: 'Orange', name: 'orange', color: '#f6a821'},
            {title: 'Pink', name: 'pink', color: '#EC407A'}
        ];
    }

    onConfigButtonClick(event) {
        this.app.configActive = !this.app.configActive;
        event.preventDefault();
    }

    onConfigCloseClick(event) {
        this.app.configActive = false;
        event.preventDefault();
    }
}
