import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutedeviationviewComponent } from './routedeviationview.component';

describe('RoutedeviationviewComponent', () => {
  let component: RoutedeviationviewComponent;
  let fixture: ComponentFixture<RoutedeviationviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoutedeviationviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutedeviationviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
