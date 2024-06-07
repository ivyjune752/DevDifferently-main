import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContextButtonComponent } from './context-button.component';

describe('ContextButtonComponent', () => {
  let component: ContextButtonComponent;
  let fixture: ComponentFixture<ContextButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContextButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContextButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
