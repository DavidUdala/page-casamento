import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-botao-com-icone',
  templateUrl: './botao-com-icone.component.html',
  styleUrls: ['./botao-com-icone.component.css']
})

export class BotaoComIconeComponent {
  @Input() path: string = ''; // Caminho do SVG passado como parâmetro
  @Input() tipoAplicativo: string = '';

  lat = -23.53453561326395; // Latitude de exemplo
  lng = -46.52521852162278; // Longitude de exemplo

  aplicativos: AplicativosDictionary = {
    Waze: `https://www.waze.com/ul?ll=${this.lat},${this.lng}&navigate=yes`,
    GoogleMaps: `https://www.google.com/maps?q=${this.lat},${this.lng}`,
    // Uber: `https://www.uber.com/ul/?dropoff[latitude]=${this.lat}&dropoff[longitude]=${this.lng}`
    Uber: `uber://?action=setPickup&pickup=my_location&dropoff[latitude]=${this.lat}&dropoff[longitude]=${this.lng}`
  }

  handleClick() {
    var url = this.aplicativos[this.tipoAplicativo];
    if (url == undefined) {
      console.error('Aplicativo Não existe');
      return;
    }

    window.open(url, '_blank');

  }
}

interface AplicativosDictionary {
  [key: string]: string;
}
