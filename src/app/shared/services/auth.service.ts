// src/app/auth.service.ts

import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private userRole: string = localStorage.getItem('userRole') || 'user';

    setUserRole(role: string) {
        this.userRole = role;
        localStorage.setItem('userRole', role);
    }

    getUserRole() {
        return this.userRole;
    }

    isLoggedIn() {
        if (localStorage.getItem("userId"))
            return true;
        else
            return false;
    }
}
