import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuProdottiComponent } from './menu-prodotti.component';

describe('MenuProdottiComponent', () => {
  let component: MenuProdottiComponent;
  let fixture: ComponentFixture<MenuProdottiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MenuProdottiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MenuProdottiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
