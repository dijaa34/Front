import { Component, HostListener, OnInit } from '@angular/core';
import { MenuItem } from 'src/app/core/models/menu.model';
import { MenuService } from '../../../services/menu.service';
import { NavbarSubmenuComponent } from '../navbar-submenu/navbar-submenu.component';
import { NgFor, NgClass } from '@angular/common';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { TranslateService } from '@ngx-translate/core';
import { TranslateModule } from '@ngx-translate/core';
import { ThemeService } from 'src/app/core/services/theme/theme.service';

@Component({
    selector: 'app-navbar-menu',
    templateUrl: './navbar-menu.component.html',
    styleUrls: ['./navbar-menu.component.scss'],
    standalone: true,
    imports: [
        NgFor,
        NgClass,
        NavbarSubmenuComponent,
        AngularSvgIconModule,
        TranslateModule
    ],
})
export class NavbarMenuComponent implements OnInit {
  private showMenuClass = ['scale-100', 'animate-fade-in-up', 'opacity-100', 'pointer-events-auto'];
  private hideMenuClass = ['scale-95', 'animate-fade-out-down', 'opacity-0', 'pointer-events-none'];
  isLanguageDropdownOpen = false;
  selectedLanguage = '';
  constructor(public menuService: MenuService,public themeService: ThemeService,public translate: TranslateService) {
    translate.addLangs(['en', 'fr']);
    translate.setDefaultLang('en');
   
  }

  ngOnInit(): void {
    this.selectedLanguage = this.loadLanguage();
  }

  loadLanguage(){
    return localStorage.getItem('lang') ?? 'en';
  }
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const targetElement = event.target as HTMLElement;
    const clickedInside = targetElement.closest('.relative');
    
    if (!clickedInside) {
      this.isLanguageDropdownOpen = false;
    }
  }
  
  public mouseEnter(event: any): void {
    let element = event.target.querySelector('app-navbar-submenu').children[0];
    if (element) {
      this.hideMenuClass.forEach((c) => element.classList.remove(c));
      this.showMenuClass.forEach((c) => element.classList.add(c));
    }
  }

  public mouseLeave(event: any): void {
    let element = event.target.querySelector('app-navbar-submenu').children[0];
    if (element) {
      this.showMenuClass.forEach((c) => element.classList.remove(c));
      this.hideMenuClass.forEach((c) => element.classList.add(c));
    }
  }

  toggleThemeMode() {
    this.themeService.theme.update((theme) => {
      const mode = !this.themeService.isDark ? 'dark' : 'light';
      return { ...theme, mode: mode };
    });
  }
 

  public toggleMenu(menu: MenuItem): void {
    menu.selected = !menu.selected;
  }


  toggleLanguageDropdown() {
    this.isLanguageDropdownOpen = !this.isLanguageDropdownOpen;
  }

  selectLanguage(language: string) {
    this.switchLang(language);
    this.selectedLanguage = language;
    this.isLanguageDropdownOpen = false;
  }

  switchLang(lang: string) {
      this.translate.use(lang);
      localStorage.setItem('lang', lang);  // Save the selected language in localStorage
  }

}
