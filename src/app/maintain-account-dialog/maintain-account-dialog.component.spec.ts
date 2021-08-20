import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MaintainAccountDialogComponent } from './maintain-account-dialog.component';

describe('MaintainAccountDialogComponent', () => {
  let component: MaintainAccountDialogComponent;
  let fixture: ComponentFixture<MaintainAccountDialogComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MaintainAccountDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintainAccountDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
