import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';
import { LogoutDialogComponent } from '../logout-dialog/logout-dialog.component';
import { GeneralService } from '../services/general.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  getName!: any;
  currentLanguage: any;
  constructor(private dialog: MatDialog, private translate: TranslateService) {}

  ngOnInit(): void {
    this.getName = localStorage.getItem('username');
    // this.translate.use(this.generalService.getLanguage());
    this.currentLanguage = localStorage.getItem('language');
    if (this.currentLanguage === null || this.currentLanguage === '') {
      this.translate.use('en');
    } else {
      this.translate.use(this.currentLanguage);
    }
    // this.translate.use(this.currentLanguage);
  }
  openDialog() {
    this.dialog.open(LogoutDialogComponent, {
      width: '360px',
      height: '180px',
    });
  }
}
