import { ComponentFixture, TestBed } from '@angular/core/testing';

import { But1Component } from './but1.component';

describe('But1Component', () => {
  let component: But1Component;
  let fixture: ComponentFixture<But1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [But1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(But1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
