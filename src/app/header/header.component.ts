import { Component } from '@angular/core';
import { AuthServiceService } from '../services/auth-service.service';

declare function getRandomPhoto(): string;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  getRandomPhotoUrl(){
    console.log(getRandomPhoto());
    return getRandomPhoto();
  }

  isAuthenticated(){
    //todo
  }
  doLogout(){
    //todo
  }
}
