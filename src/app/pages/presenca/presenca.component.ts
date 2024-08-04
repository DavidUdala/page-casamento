import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-presenca',
  templateUrl: './presenca.component.html',
  styleUrls: ['./presenca.component.css']
})
export class PresencaComponent implements OnInit {
  confirmationForm!: FormGroup ;
  isSubmitted = false;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.confirmationForm = this.fb.group({
      name: ['', Validators.required],
      attendance: ['', Validators.required],
      comparecera: ['true', Validators.required],
      quantidadeAdultos: ['', Validators.required],
      quantidadeCriancas: ['', Validators.required],
      termsAccepted1: [false, Validators.requiredTrue],
      termsAccepted2: [false, Validators.requiredTrue],
    });
  }

  onSubmit() {
    this.isSubmitted = true;
    if (this.confirmationForm.valid) {
      this.openWhatsApp();
    }
  }

  openWhatsApp() {
    const phoneNumber = '5511954394472'; // Substitua pelo número de telefone com o código do país e DDD
    const message = `Olá, me chamo ${this.confirmationForm.get('name')?.value}, gostaria de confirmar minha presença no evento!`; // Mensagem predefinida
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  }

}
