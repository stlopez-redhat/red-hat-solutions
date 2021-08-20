import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AnalyticsDashboardComponent } from './analytics-dashboard.component';

describe('AnalyticsDashboardComponent', () => {
  let component: AnalyticsDashboardComponent;
  let fixture: ComponentFixture<AnalyticsDashboardComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalyticsDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalyticsDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
