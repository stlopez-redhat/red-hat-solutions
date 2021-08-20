import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ClientTasksComponent } from './client-tasks.component';

describe('ClientTasksComponent', () => {
  let component: ClientTasksComponent;
  let fixture: ComponentFixture<ClientTasksComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientTasksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
