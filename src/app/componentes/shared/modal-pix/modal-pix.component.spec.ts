import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalPixComponent } from './modal-pix.component';

describe('ModalPixComponent', () => {
  let component: ModalPixComponent;
  let fixture: ComponentFixture<ModalPixComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalPixComponent]
    });
    fixture = TestBed.createComponent(ModalPixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
