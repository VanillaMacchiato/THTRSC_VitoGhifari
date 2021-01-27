import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitUpdateComponent } from './submit-update.component';

describe('SubmitUpdateComponent', () => {
  let component: SubmitUpdateComponent;
  let fixture: ComponentFixture<SubmitUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubmitUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
