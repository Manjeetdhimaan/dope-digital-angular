import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaidAdManagementComponent } from './paid-ad-management.component';

describe('PaidAdManagementComponent', () => {
  let component: PaidAdManagementComponent;
  let fixture: ComponentFixture<PaidAdManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaidAdManagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaidAdManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
