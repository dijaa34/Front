import { Component } from '@angular/core';
import { ThemeService } from './core/services/theme/theme.service';
import { RouterOutlet } from '@angular/router';
import { NgClass } from '@angular/common';
import { NgxSonnerToaster } from 'ngx-sonner';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { SpinnerComponent } from './shared/components/spinner/spinner.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [NgClass, RouterOutlet, NgxSonnerToaster, TranslateModule,SpinnerComponent],
})
export class AppComponent {
  title = 'HBDS';

  constructor(public themeService: ThemeService, public translate: TranslateService) {
    this.translate.addLangs(['en', 'fr']);  // Add available languages
    this.loadLanguage();  // Call the function to load the language
  }

  loadLanguage() {
    const savedLang = localStorage.getItem('lang');  // Retrieve the saved language from localStorage
    
    if (savedLang) {
      // Use the saved language if it exists
      this.translate.setDefaultLang(savedLang);
      this.translate.use(savedLang);
    } else {
      // If no language is saved, set the default language and save it in localStorage
      const defaultLang = 'en';
      this.translate.setDefaultLang(defaultLang);
      this.translate.use(defaultLang);
      localStorage.setItem('lang', defaultLang);  // Save the default language in localStorage
    }
  }
}
