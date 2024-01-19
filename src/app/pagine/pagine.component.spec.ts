import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagineComponent } from './pagine.component';

describe('PagineComponent', () => {
  let component: PagineComponent;
  let fixture: ComponentFixture<PagineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PagineComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PagineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
