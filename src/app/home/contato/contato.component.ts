import { MenuItem } from 'primeng/api';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HOME } from 'src/app/shared/constants/breadcrumbs';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.scss']
})
export class ContatoComponent implements OnInit {
  formulario: FormGroup;
  constructor(private formBuilder: FormBuilder,
    private router: Router) {

    this.formulario = this.formBuilder.group({
      nome: ['', [Validators.required, Validators.pattern("[a-zA-Z ]*")]],
      email: ['', [Validators.required, Validators.email]],
      assunto: ['', [Validators.required] ],
      mensagem: ['', [Validators.required] ]})
   }

  home = HOME;
  items: MenuItem[];
  ngOnInit(): void {
    this.items = [
      {label:'Contato'}
    ]
  }

  onSubmit() {
   
    this.formulario.reset();
    setTimeout(() => {
      this.router.navigate(['/']);
    }, 2000);
    
  
  }

  aplicaCssErro(campo: any) {
    return {
      'is-invalid': !this.formulario.get(campo)?.valid && this.formulario.get(campo)?.touched
    };
  }

}
