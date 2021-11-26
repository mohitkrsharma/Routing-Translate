import { AfterViewInit, Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit, AfterViewInit {
  currentLanguage: any;
  constructor(
    private toastr: ToastrService,
    private translate: TranslateService
  ) {}

  ngOnInit(): void {
    this.currentLanguage = localStorage.getItem('language');
    if (this.currentLanguage === null || this.currentLanguage === '') {
      this.translate.use('en');
    } else {
      this.translate.use(this.currentLanguage);
    }
    // this.translate.use(this.currentLanguage);
  }
  ngAfterViewInit(): void {
    if (this.currentLanguage === 'en') {
      this.toastr.success('', 'Login Successfully');
    } else if (this.currentLanguage === 'fr') {
      this.toastr.success('', 'Connectez-vous avec succès');
    } else if (this.currentLanguage === 'nl') {
      this.toastr.success('', 'Anmeldung erfolgreich');
    } else if (this.currentLanguage === 'jp') {
      this.toastr.success('', '正常にログイン');
    }
  }
}
