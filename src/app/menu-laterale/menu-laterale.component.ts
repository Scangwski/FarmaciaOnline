import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-laterale',
  templateUrl: './menu-laterale.component.html',
  styleUrls: ['./menu-laterale.component.css']
})
export class MenuLateraleComponent implements OnInit {
  menuContentVisible = false;

  ngOnInit() {
    // Si esegue dopo che la vista del componente è stata completamente inizializzata
    const menuButton = document.querySelector('.menuButton') as HTMLElement;
    const menuContent = document.getElementById('menuContent') as HTMLElement;
    const closeButton = document.getElementById('closeButton') as HTMLElement;

    menuButton.addEventListener('click', () => {
      this.toggleMenuContent();
    });

    closeButton.addEventListener('click', () => {
      this.hideMenuContent();
    });
  }

  public toggleMenuContent() {
    // Alterna la visibilità del contenuto del menu
    this.menuContentVisible = !this.menuContentVisible;
  }

  hideMenuContent() {
    // Nasconde il contenuto del menu
    this.menuContentVisible = false;
  }
}
