import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-logout-dialog',
  templateUrl: './logout-dialog.component.html',
  styleUrls: ['./logout-dialog.component.css'],
})
export class LogoutDialogComponent implements OnInit {
  currentLanguage: any;
  constructor(
    private router: Router,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService,
    private dialog: MatDialog,
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
  logout() {
    this.spinner.show();
    localStorage.removeItem('token');
    setTimeout(() => {
      /** spinner ends after 2 seconds */
      this.spinner.hide();
      this.router.navigate(['login']);
      this.dialog.closeAll();
      // this.toastr.success('', 'Logged out Successfully');
      if (this.currentLanguage === 'en') {
        this.toastr.success('', 'Logged out Successfully');
      } else if (this.currentLanguage === 'fr') {
        this.toastr.success('', 'Déconnecté avec succès');
      } else if (this.currentLanguage === 'nl') {
        this.toastr.success('', 'Erfolgreich abgemeldet');
      } else if (this.currentLanguage === 'jp') {
        this.toastr.success('', '正常にログアウトしました');
      }
    }, 2000);
  }
  cancel() {
    this.dialog.closeAll();
  }
}
