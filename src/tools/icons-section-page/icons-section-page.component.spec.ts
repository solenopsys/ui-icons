import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconsSectionPageComponent } from './icons-section-page.component';

describe('IconsSectionPageComponent', () => {
  let component: IconsSectionPageComponent;
  let fixture: ComponentFixture<IconsSectionPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconsSectionPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconsSectionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
