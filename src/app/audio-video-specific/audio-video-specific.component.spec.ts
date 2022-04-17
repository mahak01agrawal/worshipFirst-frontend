import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AudioVideoSpecificComponent } from './audio-video-specific.component';

describe('AudioVideoSpecificComponent', () => {
  let component: AudioVideoSpecificComponent;
  let fixture: ComponentFixture<AudioVideoSpecificComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AudioVideoSpecificComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AudioVideoSpecificComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
