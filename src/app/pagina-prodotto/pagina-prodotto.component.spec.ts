import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaProdottoComponent } from './pagina-prodotto.component';

describe('PaginaProdottoComponent', () => {
  let component: PaginaProdottoComponent;
  let fixture: ComponentFixture<PaginaProdottoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PaginaProdottoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PaginaProdottoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
