import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotaoComIconeComponent } from './botao-com-icone.component';

describe('BotaoComIconeComponent', () => {
  let component: BotaoComIconeComponent;
  let fixture: ComponentFixture<BotaoComIconeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BotaoComIconeComponent]
    });
    fixture = TestBed.createComponent(BotaoComIconeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
