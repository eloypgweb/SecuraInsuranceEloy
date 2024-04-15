import { ComponentFixture, TestBed } from '@angular/core/testing';

import { But2Component } from './but2.component';

describe('But2Component', () => {
  let component: But2Component;
  let fixture: ComponentFixture<But2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [But2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(But2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
