import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotaoCopiarComponent } from './botao-copiar.component';

describe('BotaoCopiarComponent', () => {
  let component: BotaoCopiarComponent;
  let fixture: ComponentFixture<BotaoCopiarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BotaoCopiarComponent]
    });
    fixture = TestBed.createComponent(BotaoCopiarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
