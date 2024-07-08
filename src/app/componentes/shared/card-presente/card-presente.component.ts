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
  constructor(public dialog: MatDialog) { }

  openModalPix() {
    this.dialog.open(ModalPixComponent);
  }
}
