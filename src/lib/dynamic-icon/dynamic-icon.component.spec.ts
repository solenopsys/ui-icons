import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DunamicIconComponent } from './dunamic-icon.component';

describe('DunamicIconComponent', () => {
  let component: DunamicIconComponent;
  let fixture: ComponentFixture<DunamicIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DunamicIconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DunamicIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
