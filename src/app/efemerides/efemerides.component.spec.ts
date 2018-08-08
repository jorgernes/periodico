import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EfemeridesComponent } from './efemerides.component';

describe('EfemeridesComponent', () => {
  let component: EfemeridesComponent;
  let fixture: ComponentFixture<EfemeridesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EfemeridesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EfemeridesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
