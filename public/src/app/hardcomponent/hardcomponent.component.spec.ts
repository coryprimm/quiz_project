import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HardcomponentComponent } from './hardcomponent.component';

describe('HardcomponentComponent', () => {
  let component: HardcomponentComponent;
  let fixture: ComponentFixture<HardcomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HardcomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HardcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
