import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

    constructor(
        private spinner: NgxSpinnerService,
        private authService: AuthService,
        private router: Router
    ){}

    loginForm = new FormGroup({
        userName : new FormControl('',Validators.required) , 
        password : new FormControl('',Validators.required) , 
    })

    login(){
        if(this.loginForm.invalid){
            return;
        }
        this.spinner.show();
        let formData= this.loginForm.value;
        if(formData.userName == 'admin' && formData.password == 'admin'){
            localStorage.setItem('userId',"1");
            this.authService.setUserRole('admin');
            this.router.navigate(['/products']);
        } else if (formData.userName == 'user' && formData.password == 'user'){
            localStorage.setItem('userId',"2");
            this.authService.setUserRole('user');
            this.router.navigate(['/categories-product']);
        } else {
            alert("login faild")
        }
        this.spinner.hide();

    }

}
