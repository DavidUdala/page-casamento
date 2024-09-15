import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalPixComponent } from '../modal-pix/modal-pix.component';

@Component({
  selector: 'app-card-presente',
  templateUrl: './card-presente.component.html',
  styleUrls: ['./card-presente.component.css']
})
export class CardPresenteComponent {
  @Input() preco: number = 0;
  @Input() urlImg: string = '';
  @Input() descricaoPresente: string = '';
  @Input() tituloPresente: string = '';
  @Input() pathImgQrCode : string= '';
  @Input() pixCopyPaste : string = '';

  constructor(public dialog: MatDialog) { }

  openModalPix(pathImgQrCode: string, pixCopyPaste : string) {
    this.dialog.open(ModalPixComponent, {
      data:{
        pathImgQrCode,
        pixCopyPaste
      }
    });
  }
}
