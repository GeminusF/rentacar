import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GarageSummaryComponent } from './garage-summary.component';

describe('GarageSummaryComponent', () => {
  let component: GarageSummaryComponent;
  let fixture: ComponentFixture<GarageSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GarageSummaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GarageSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
