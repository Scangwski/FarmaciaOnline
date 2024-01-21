import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isLoggedIn: boolean = false;
  private username: string | null = null;
  login(username: string, password: string): boolean {
    if (username === 'utente' && password === 'password') {
      this.isLoggedIn = true;
      this.username = username;
      return true;
    } else {
      return false;
    }
  }

  logout(): void {
    this.isLoggedIn = false;
    this.username = null;
  }

  isAuthenticated(): boolean {
    return this.isLoggedIn;
  }

  getUsername(): string | null {
    return this.username || '';
  }
}
