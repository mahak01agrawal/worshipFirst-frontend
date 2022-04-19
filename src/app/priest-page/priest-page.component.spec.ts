import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriestPageComponent } from './priest-page.component';

describe('PriestPageComponent', () => {
  let component: PriestPageComponent;
  let fixture: ComponentFixture<PriestPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PriestPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PriestPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
