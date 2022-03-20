import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicschildComponent } from './basicschild.component';

describe('BasicschildComponent', () => {
  let component: BasicschildComponent;
  let fixture: ComponentFixture<BasicschildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicschildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicschildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
