import { Component } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';
@Component({
  selector: 'app-botao-copiar',
  templateUrl: './botao-copiar.component.html',
  styleUrls: ['./botao-copiar.component.css']
})
export class BotaoCopiarComponent {
  textToCopy: string = 'te';
  constructor(private clipboard: Clipboard) {}

  copyText() {
    this.clipboard.copy(this.textToCopy);
  }
}
