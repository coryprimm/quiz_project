import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EasycomponentComponent } from './easycomponent.component';

describe('EasycomponentComponent', () => {
  let component: EasycomponentComponent;
  let fixture: ComponentFixture<EasycomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EasycomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EasycomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
