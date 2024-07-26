import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-botao-com-icone',
  templateUrl: './botao-com-icone.component.html',
  styleUrls: ['./botao-com-icone.component.css']
})
export class BotaoComIconeComponent {
  @Input() path: string = ''; // Caminho do SVG passado como parâmetro
  @Input() tipoAplicativo: string = '';

  handleClick() {

    // const url = `https://www.waze.com/ul?ll=${this.lat},${this.lng}&navigate=yes`;
    // window.open(url, '_blank');
    // Você pode emitir um evento aqui ou executar qualquer outra lógica
  }

}
