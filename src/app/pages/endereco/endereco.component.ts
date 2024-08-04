import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-endereco',
  templateUrl: './endereco.component.html',
  styleUrls: ['./endereco.component.css']
})
export class EnderecoComponent implements OnInit {
  locationForm!: FormGroup;
  lat = -23.53453561326395; // Latitude de exemplo
  lng = -46.52521852162278; // Longitude de exemplo
  mapWidth: number = 350;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.locationForm = this.fb.group({});
    this.updateMapWidth();
  }


  private updateMapWidth() {
    if (window.innerWidth > 768) {
      this.mapWidth = 550;
    }
  }
}
