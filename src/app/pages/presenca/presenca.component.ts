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
  comparecera: string = "true";

  constructor(private fb: FormBuilder) {

  }


  ngOnInit(): void {
    this.confirmationForm = this.fb.group({
      name: ['', Validators.required],
      comparecera: ["true"],
      quantidadeAdultos: ['', Validators.required],
      quantidadeCriancas: ['', Validators.required],
      termsAccepted1: [false, Validators.requiredTrue],
      termsAccepted2: [false, Validators.requiredTrue],
      termsAccepted3: [false],
      termsAccepted4: [false, Validators.requiredTrue],
    });
    this.confirmationForm.get('comparecera')?.valueChanges.subscribe(value => {
      this.comparecera = value;
      if (this.comparecera == "true") {
        this.ativarValidacoesConteudoA(true);
        this.ativarValidacoesConteudoB(false);
      } else {
        this.ativarValidacoesConteudoA(false);
        this.ativarValidacoesConteudoB(true);
      }
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
    msg += ` e de mais ${this.confirmationForm.get('quantidadeAdultos')?.value} adulto(s)`
    msg += ` e ${this.confirmationForm.get('quantidadeCriancas')?.value} criança(s).`

    return msg;
  }


  ativarValidacoesConteudoA(ativa: boolean) {
    if (ativa) {
      this.confirmationForm.get('quantidadeAdultos')?.setValidators([Validators.required]);
      this.confirmationForm.get('quantidadeCriancas')?.setValidators([Validators.required]);
      this.confirmationForm.get('termsAccepted1')?.setValidators([Validators.requiredTrue]);
      this.confirmationForm.get('termsAccepted2')?.setValidators([Validators.requiredTrue]);
      this.confirmationForm.get('termsAccepted4')?.setValidators([Validators.requiredTrue]);

    } else {
      this.confirmationForm.get('quantidadeAdultos')?.clearValidators();
      this.confirmationForm.get('quantidadeCriancas')?.clearValidators();
      this.confirmationForm.get('termsAccepted1')?.clearValidators();
      this.confirmationForm.get('termsAccepted2')?.clearValidators();
      this.confirmationForm.get('termsAccepted4')?.clearValidators();

    }

    this.confirmationForm.get('quantidadeAdultos')?.updateValueAndValidity();
    this.confirmationForm.get('quantidadeCriancas')?.updateValueAndValidity();
    this.confirmationForm.get('termsAccepted1')?.updateValueAndValidity();
    this.confirmationForm.get('termsAccepted2')?.updateValueAndValidity();
    this.confirmationForm.get('termsAccepted4')?.updateValueAndValidity();
  }

  ativarValidacoesConteudoB(ativa: boolean) {
    if (ativa) {
      this.confirmationForm.get('termsAccepted3')?.setValidators([Validators.requiredTrue]);
    } else {
      this.confirmationForm.get('termsAccepted3')?.clearValidators();
    }
    this.confirmationForm.get('termsAccepted3')?.updateValueAndValidity();
  }
}
