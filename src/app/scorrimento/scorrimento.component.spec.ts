import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScorrimentoComponent } from './scorrimento.component';

describe('ScorrimentoComponent', () => {
  let component: ScorrimentoComponent;
  let fixture: ComponentFixture<ScorrimentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ScorrimentoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ScorrimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
