import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  currentView = 'charts';
  currentLanguage: any;
  dropdownValue: string = '';
  constructor(
    private spinner: NgxSpinnerService,
    private translate: TranslateService
  ) {
    translate.addLangs(['en', 'fr', 'nl', 'jp']);
    translate.setDefaultLang('en');
  }

  ngOnInit(): void {
    this.currentLanguage = localStorage.getItem('language');
    if (this.currentLanguage === null || this.currentLanguage === '') {
      this.translate.use('en');
      this.dropdownValue = 'en';
    } else {
      this.translate.use(this.currentLanguage);
      this.dropdownValue = this.currentLanguage;
    }
    // this.translate.use(this.currentLanguage);
  }
  show(val: string) {
    /** spinner starts on init */
    this.spinner.show();
    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 2000);
    this.currentView = val;
  }
  setLanguage(lang: string) {
    this.translate.use(lang);
    localStorage.setItem('language', lang);
  }
}
