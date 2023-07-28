import { Router } from '@angular/router';
import { AuthService } from './../../shared/services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    constructor(
        private authService: AuthService,
        private router: Router
    ){}

    ngOnInit(): void {
        if(this.authService.isLoggedIn()){
            if(this.authService.getUserRole() == 'user'){
                this.router.navigate(['/categories-product']);
            } else {
                this.router.navigate(['/products']);
            }
        } else {
            this.router.navigate(['/auth/login']);
        }
    }

}
