import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetingModelComponent } from './meeting-model.component';

describe('MeetingModelComponent', () => {
  let component: MeetingModelComponent;
  let fixture: ComponentFixture<MeetingModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeetingModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeetingModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
