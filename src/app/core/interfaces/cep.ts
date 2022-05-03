export class Cep{
  cep:string;
  logradouro:string;
  numero:string='';
  cidade:string='';
  bairro:string='';
  estado:string='';

  constructor(
    cep:string = '',
    numero:string = '',
    cidade:string = '',
    bairro:string = '',
    estado:string = '',
  ){
    this.cep = '';
    this.numero = '';
    this.cidade = '';
    this.bairro = '';
    this.estado = '';
  }
}