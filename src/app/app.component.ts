import {Component, ElementRef, Renderer, ViewChild} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public menuMode = 'static';

  public menuActive = true;

  public mobileMenuActive = false;

  public topbarMenuActive = false;

  menuButtonClick: boolean;

  topbarMenuButtonClick: boolean;

  topbarMenuClick: boolean;

  activeTopbarItem: Element;

  resetMenu: boolean;

  menuHoverActive: boolean;

  onMenuButtonClick(event: Event) {
    this.menuButtonClick = true;
    this.menuActive = !this.menuActive;
    if (this.isMobile()) {
      this.mobileMenuActive = !this.mobileMenuActive; }
    event.preventDefault();
  }

  onTopbarMenuButtonClick(event: Event) {
    this.topbarMenuButtonClick = true;
    this.topbarMenuActive = !this.topbarMenuActive;
    event.preventDefault();
  }

  onTopbarMenuClick() {
    this.topbarMenuClick = true;
  }

  onTopbarItemClick(event: Event, item: Element) {
    this.topbarMenuButtonClick = true;

    if (this.activeTopbarItem === item) {
      this.activeTopbarItem = null;
    } else {
      this.activeTopbarItem = item;
    }
    event.preventDefault();
  }
  isHorizontal() {
    return this.menuMode === 'horizontal';
  }

  isSlim() {
    return this.menuMode === 'slim';
  }

  isMobile() {
    return window.innerWidth < 1025;
  }
}
