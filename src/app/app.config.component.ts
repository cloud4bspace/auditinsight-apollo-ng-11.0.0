import {Component, OnInit} from '@angular/core';
import { AppComponent } from './app.component';

@Component({
    selector: 'app-config',
    template: `
        <div class="layout-config" [ngClass]="{'layout-config-active': app.configActive}" (click)="app.onConfigClick($event)">
            <div class="layout-config-content">
                <a style="cursor: pointer" id="layout-config-button" class="layout-config-button" (click)="onConfigButtonClick($event)">
                    <i class="pi pi-cog"></i>
                </a>
                <a style="cursor: pointer" class="layout-config-close" (click)="onConfigCloseClick($event)">
                    <i class="pi pi-times"></i>
                </a>
                <p-tabView>
                    <p-tabPanel header="Menu">
                        <h1>Menu Modes</h1>
                        <div class="panel-items">
                            <div class="panel-item">
                                <a style="cursor: pointer" (click)="app.menuMode = 'static'">
                                    <img src="assets/layout/images/configurator/placeholder.png" alt="apollo"/>
                                    <i class="pi pi-check" *ngIf="app.menuMode === 'static'"></i>
                                </a>
                                <span>Static</span>
                            </div>
                            <div class="panel-item">
                                <a style="cursor: pointer" (click)="app.menuMode = 'overlay'">
                                    <img src="assets/layout/images/configurator/placeholder.png" alt="apollo"/>
                                    <i class="pi pi-check" *ngIf="app.menuMode === 'overlay'"></i>
                                </a>
                                <span>Overlay</span>
                            </div>
                            <div class="panel-item">
                                <a style="cursor: pointer" (click)="app.menuMode = 'horizontal'">
                                    <img src="assets/layout/images/configurator/placeholder.png" alt="apollo"/>
                                    <i class="pi pi-check" *ngIf="app.menuMode === 'horizontal'"></i>
                                </a>
                                <span>Horizontal</span>
                            </div>
                            <div class="panel-item">
                                <a style="cursor: pointer" (click)="app.menuMode = 'slim'">
                                    <img src="assets/layout/images/configurator/placeholder.png" alt="apollo"/>
                                    <i class="pi pi-check" *ngIf="app.menuMode === 'slim'"></i>
                                </a>
                                <span>Slim</span>
                            </div>
                        </div>
                    </p-tabPanel>
                    <p-tabPanel header="Themes">
                        <h1>Dark</h1>
                        <div class="panel-items">
                            <div class="panel-item" *ngFor="let darkTheme of darkThemes">
                                <a style="cursor: pointer" class="layout-config-layout-option" (click)="app.changeTheme(darkTheme.label)">
                                    <img src="assets/layout/images/configurator/placeholder.png" alt="apollo"/>
                                    <i class="pi pi-check" *ngIf="app.theme === darkTheme.label"></i>
                                </a>
                            </div>
                        </div>
                        <h1>Light</h1>
                        <div class="panel-items">
                            <div class="panel-item" *ngFor="let lightTheme of lightThemes">
                                <a style="cursor: pointer" class="layout-config-layout-option" (click)="app.changeTheme(lightTheme.label)">
                                    <img src="assets/layout/images/configurator/placeholder.png" alt="apollo"/>
                                    <i class="pi pi-check" *ngIf="app.theme === lightTheme.label"></i>
                                </a>
                            </div>
                        </div>
                    </p-tabPanel>
                </p-tabView>
            </div>
        </div>
    `
})
export class AppConfigComponent implements OnInit {

    darkThemes: any[];

    lightThemes: any[];

    constructor(public app: AppComponent) {}

    ngOnInit() {
        this.darkThemes = [
            {label: 'blue-dark'},
            {label: 'green-dark'},
            {label: 'cyan-dark'},
            {label: 'purple-dark'},
            {label: 'indigo-dark'},
            {label: 'yellow-dark'},
            {label: 'orange-dark'},
            {label: 'pink-dark'}
        ];

        this.lightThemes = [
            {label: 'blue-light'},
            {label: 'green-light'},
            {label: 'cyan-light'},
            {label: 'purple-light'},
            {label: 'indigo-light'},
            {label: 'yellow-light'},
            {label: 'orange-light'},
            {label: 'pink-light'}
        ]
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
