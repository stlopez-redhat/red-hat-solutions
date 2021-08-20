import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TrasactionProgressComponent } from './trasaction-progress.component';

describe('TrasactionProgressComponent', () => {
  let component: TrasactionProgressComponent;
  let fixture: ComponentFixture<TrasactionProgressComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TrasactionProgressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrasactionProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
