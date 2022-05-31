import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoGraphicDesignComponent } from './logo-graphic-design.component';

describe('LogoGraphicDesignComponent', () => {
  let component: LogoGraphicDesignComponent;
  let fixture: ComponentFixture<LogoGraphicDesignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogoGraphicDesignComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoGraphicDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
