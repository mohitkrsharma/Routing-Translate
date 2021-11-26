import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { GeneralService } from '../services/general.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  currentLanguage: any;
  constructor(
    public router: Router,
    public formBuilder: FormBuilder,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService,
    private translate: TranslateService
  ) {
    this.loginForm = this.formBuilder.group({
      email: [
        '',
        [
          Validators.required,
          Validators.email,
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
        ],
      ],
      pass: ['', Validators.required],
    });
  }
  ngOnInit(): void {
    this.currentLanguage = localStorage.getItem('language');
    if (this.currentLanguage === null || this.currentLanguage === '') {
      this.translate.use('en');
    } else {
      this.translate.use(this.currentLanguage);
    }
    // this.translate.use(this.currentLanguage);
  }
  navigate() {
    /** spinner starts on init **/
    this.spinner.show();
    if (
      this.loginForm.value.email === 'mohit@yopmail.com' &&
      this.loginForm.value.pass === 'Test@123'
    ) {
      localStorage.setItem('username', 'Mohit');
      localStorage.setItem('token', 'true');
      setTimeout(() => {
        /** spinner ends after 5 seconds **/
        this.spinner.hide();
        this.router.navigate(['dashboard']);
      }, 2000);
    } else {
      localStorage.setItem('token', 'true');
      setTimeout(() => {
        /** spinner ends after 5 seconds **/
        this.spinner.hide();
        this.toastr.error('', 'Invalid Credentials');
      }, 2000);
    }
  }
}
