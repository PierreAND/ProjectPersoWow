import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WowSpecialization } from './wow-specialization';

describe('WowSpecialization', () => {
  let component: WowSpecialization;
  let fixture: ComponentFixture<WowSpecialization>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WowSpecialization]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WowSpecialization);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
