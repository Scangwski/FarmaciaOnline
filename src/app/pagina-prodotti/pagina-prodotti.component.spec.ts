import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaProdottiComponent } from './pagina-prodotti.component';

describe('PaginaProdottiComponent', () => {
  let component: PaginaProdottiComponent;
  let fixture: ComponentFixture<PaginaProdottiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PaginaProdottiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PaginaProdottiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
