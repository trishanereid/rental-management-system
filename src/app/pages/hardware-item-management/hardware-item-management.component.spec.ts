import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HardwareItemManagementComponent } from './hardware-item-management.component';

describe('HardwareItemManagementComponent', () => {
  let component: HardwareItemManagementComponent;
  let fixture: ComponentFixture<HardwareItemManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HardwareItemManagementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HardwareItemManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
