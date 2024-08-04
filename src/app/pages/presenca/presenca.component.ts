import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-presenca',
  templateUrl: './presenca.component.html',
  styleUrls: ['./presenca.component.css']
})
export class PresencaComponent implements OnInit {
  confirmationForm!: FormGroup;
  isSubmitted = false;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.confirmationForm = this.fb.group({
      name: ['', Validators.required],
      comparecera: ['true'],
      quantidadeAdultos: ['', Validators.required],
      quantidadeCriancas: ['', Validators.required],
      termsAccepted1: [false, Validators.requiredTrue],
      termsAccepted2: [false, Validators.requiredTrue],
    });
  }

  onSubmit() {
    this.isSubmitted = true;
    console.log('valido? ', this.confirmationForm.valid);
    if (this.confirmationForm.valid) {
      this.openWhatsApp();
    }
  }

  openWhatsApp() {
    const phoneNumber = '5511954394472';
    const message = this.textoConfirmacaoPresenca(); // Mensagem predefinida
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  }

  textoConfirmacaoPresenca(): string {
    let msg = `Olá, me chamo ${this.confirmationForm.get('name')?.value}`;

    console.log(this.confirmationForm.get('comparecera')?.value);

    if (this.confirmationForm.get('comparecera')?.value != 'true') {
      msg += ` ,infelizmente não poderei comparecer ao casamento.`
      return msg;
    }

    msg += ` ,gostaria de confirmar minha presença`
    msg += ` e de mais ${this.confirmationForm.get('quantidadeAdultos')?.value - 1} adulto(s)`
    msg += ` e ${this.confirmationForm.get('quantidadeCriancas')?.value} criança(s).`


    return msg;
  }
}
