import { Component, inject, Input } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-pix',
  templateUrl: './modal-pix.component.html',
  styleUrls: ['./modal-pix.component.css']
})
export class ModalPixComponent  {

  data = inject(MAT_DIALOG_DATA);

}
