import { ComponentFixture, TestBed } from '@angular/core/testing';

import { But3Component } from './but3.component';

describe('But3Component', () => {
  let component: But3Component;
  let fixture: ComponentFixture<But3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [But3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(But3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
