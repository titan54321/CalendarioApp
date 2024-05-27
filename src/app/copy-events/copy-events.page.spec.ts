import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CopyEventsPage } from './copy-events.page';

describe('CopyEventsPage', () => {
  let component: CopyEventsPage;
  let fixture: ComponentFixture<CopyEventsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CopyEventsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
