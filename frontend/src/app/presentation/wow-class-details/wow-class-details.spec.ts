import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WowClassDetails } from './wow-class-details';

describe('WowClassDetails', () => {
  let component: WowClassDetails;
  let fixture: ComponentFixture<WowClassDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WowClassDetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WowClassDetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
