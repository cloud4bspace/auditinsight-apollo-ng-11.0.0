import {Component, OnInit} from '@angular/core';
import {MenuService} from './app.menu.service';
import {PrimeNGConfig} from 'primeng/api';

@Component({
    selector: 'app-main',
    templateUrl: './app.main.component.html'
})
export class AppMainComponent implements OnInit {

    menuMode = 'static';

    colorScheme = 'light';

    theme = 'blue-light';

    topbarMenuActive: boolean;

    overlayMenuActive: boolean;

    staticMenuDesktopInactive: boolean;

    staticMenuMobileActive: boolean;

    menuClick: boolean;

    topbarItemClick: boolean;

    activeTopbarItem: any;

    menuHoverActive: boolean;

    configClick: boolean;

    configActive: boolean;

    inputStyle = 'outlined';

    ripple: boolean;

    constructor(private menuService: MenuService, private primengConfig: PrimeNGConfig) {
    }

    ngOnInit() {
        this.primengConfig.ripple = true;
    }

    changeColorScheme(scheme) {
        const themeLink = document.getElementById('theme-css');
        const href = themeLink.getAttribute('href');
        const themeFile = href.substring(href.lastIndexOf('/') + 1, href.lastIndexOf('.'));
        const themeTokens = themeFile.split('-');
        const themeName = themeTokens[1];

        const invoiceLogoLink = document.getElementById('invoice-logo') as HTMLImageElement;

        if (invoiceLogoLink) {
            if (scheme === 'light') {
                invoiceLogoLink.src = 'assets/layout/images/logo-dark.png';
            }
            else {
                invoiceLogoLink.src = 'assets/layout/images/logo-white.png';
            }
        }

        this.changeTheme(themeName + '-' + scheme);
    }

    onThemeChange(theme) {
        this.theme = theme;
        this.changeTheme(this.theme + '-' + this.colorScheme);

        event.preventDefault();
    }

    changeTheme(theme) {
        this.theme = theme.split('-')[0];
        this.changeStyleSheetUrl('layout-css', theme, 'layout');
        this.changeStyleSheetUrl('theme-css', theme, 'theme');
    }

    changeStyleSheetUrl(id, value, prefix) {
        const element = document.getElementById(id);
        const urlTokens = element.getAttribute('href').split('/');
        urlTokens[urlTokens.length - 1] = prefix + '-' + value + '.css';
        const newURL = urlTokens.join('/');
        this.replaceLink(element, newURL);

        if (value.indexOf('dark') !== -1) {
            this.colorScheme = 'dark';
        } else if (value.indexOf('dim') !== -1) {
            this.colorScheme = 'dim';
        } else {
            this.colorScheme = 'light';
        }

    }

    replaceLink(linkElement, href) {
        if (this.isIE()) {
            linkElement.setAttribute('href', href);
        } else {
            const id = linkElement.getAttribute('id');
            const cloneLinkElement = linkElement.cloneNode(true);

            cloneLinkElement.setAttribute('href', href);
            cloneLinkElement.setAttribute('id', id + '-clone');

            linkElement.parentNode.insertBefore(cloneLinkElement, linkElement.nextSibling);

            cloneLinkElement.addEventListener('load', () => {
                linkElement.remove();
                cloneLinkElement.setAttribute('id', id);
            });
        }
    }

    isIE() {
        return /(MSIE|Trident\/|Edge\/)/i.test(window.navigator.userAgent);
    }

    onLayoutClick() {
        if (!this.topbarItemClick) {
            this.activeTopbarItem = null;
            this.topbarMenuActive = false;
        }

        if (!this.menuClick) {
            if (this.isHorizontal() || this.isSlim()) {
                this.menuService.reset();
            }

            if (this.overlayMenuActive || this.staticMenuMobileActive) {
                this.hideOverlayMenu();
            }

            this.menuHoverActive = false;
        }

        if (this.configActive && !this.configClick) {
            this.configActive = false;
        }

        this.configClick = false;
        this.topbarItemClick = false;
        this.menuClick = false;
    }

    onMenuButtonClick(event) {
        this.menuClick = true;
        this.topbarMenuActive = false;

        if (this.isOverlay()) {
            this.overlayMenuActive = !this.overlayMenuActive;
        }
        if (this.isDesktop()) {
            this.staticMenuDesktopInactive = !this.staticMenuDesktopInactive;
        } else {
            this.staticMenuMobileActive = !this.staticMenuMobileActive;
        }

        event.preventDefault();
    }

    onMenuClick() {
        this.menuClick = true;
    }

    onTopbarMenuButtonClick(event) {
        this.topbarItemClick = true;
        this.topbarMenuActive = !this.topbarMenuActive;

        this.hideOverlayMenu();

        event.preventDefault();
    }

    onTopbarItemClick(event, item) {
        this.topbarItemClick = true;

        if (this.activeTopbarItem === item) {
            this.activeTopbarItem = null;
        } else {
            this.activeTopbarItem = item;
        }

        event.preventDefault();
    }

    onTopbarSubItemClick(event) {
        event.preventDefault();
    }

    onConfigClick(event) {
        this.configClick = true;
    }

    onRippleChange(event) {
        this.ripple = event.checked;
    }

    isHorizontal() {
        return this.menuMode === 'horizontal';
    }

    isSlim() {
        return this.menuMode === 'slim';
    }

    isOverlay() {
        return this.menuMode === 'overlay';
    }

    isStatic() {
        return this.menuMode === 'static';
    }

    isMobile() {
        return window.innerWidth < 1025;
    }

    isDesktop() {
        return window.innerWidth > 1024;
    }

    isTablet() {
        const width = window.innerWidth;
        return width <= 1024 && width > 640;
    }

    hideOverlayMenu() {
        this.overlayMenuActive = false;
        this.staticMenuMobileActive = false;
    }
}
