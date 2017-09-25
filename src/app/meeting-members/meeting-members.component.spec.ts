import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetingMembersComponent } from './meeting-members.component';

describe('MeetingMembersComponent', () => {
  let component: MeetingMembersComponent;
  let fixture: ComponentFixture<MeetingMembersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeetingMembersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeetingMembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
