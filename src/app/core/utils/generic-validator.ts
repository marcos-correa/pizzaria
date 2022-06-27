import { AbstractControl, Validators } from '@angular/forms';

export class GenericValidator {
  constructor() {}

  /**
   * Valida se o CPF é valido. Deve-se ser informado o cpf sem máscara.
   */
  static isValidCpf() {
    return (control: AbstractControl): Validators => {
      const cpf = control.value;
      if (cpf) {
        let numbers, digits, sum, i, result, equalDigits;
        equalDigits = 1;
        if (cpf.length < 11) {
          return null;
        }

        for (i = 0; i < cpf.length - 1; i++) {
          if (cpf.charAt(i) !== cpf.charAt(i + 1)) {
            equalDigits = 0;
            break;
          }
        }

        if (!equalDigits) {
          numbers = cpf.substring(0, 9);
          digits = cpf.substring(9);
          sum = 0;
          for (i = 10; i > 1; i--) {
            sum += numbers.charAt(10 - i) * i;
          }

          result = sum % 11 < 2 ? 0 : 11 - (sum % 11);

          if (result !== Number(digits.charAt(0))) {
            return { cpfNotValid: true };
          }
          numbers = cpf.substring(0, 10);
          sum = 0;

          for (i = 11; i > 1; i--) {
            sum += numbers.charAt(11 - i) * i;
          }
          result = sum % 11 < 2 ? 0 : 11 - (sum % 11);

          if (result !== Number(digits.charAt(1))) {
            return { cpfNotValid: true };
          }
          return null;
        } else {
          return { cpfNotValid: true };
        }
      }
      return null;
    };
  }

  static isValidNascimento() {
    return (control: AbstractControl): Validators => {
      const nascimento = control.value;
      let regex = /(((0|1)[0-9]|2[0-9]|3[0-1])\/(0[1-9]|1[0-2])\/((19|20)\d\d))$/;
      console.log(nascimento)
      if (regex.test(nascimento)) {
        let parts = nascimento.split("/");
        let dtDOB = new Date(parts[1] + "/" + parts[0] + "/" + parts[2]);
        let dtCurrent = new Date();
       
        if (dtCurrent.getFullYear() - dtDOB.getFullYear() < 18) {
          return { nascimentoNotValid: true };
        }

        if (dtCurrent.getFullYear() - dtDOB.getFullYear() == 18) {
  
          //CD: 11/06/2018 and DB: 15/07/2000. Will turned 18 on 15/07/2018.
          if (dtCurrent.getMonth() < dtDOB.getMonth()) {
            return { nascimentoNotValid: true };
          }
          if (dtCurrent.getMonth() == dtDOB.getMonth()) {
              //CD: 11/06/2018 and DB: 15/06/2000. Will turned 18 on 15/06/2018.
              if (dtCurrent.getDate() < dtDOB.getDate()) {
                return { nascimentoNotValid: true };
              }
          }
        }
      
      return null;
       
        } else {
          return { nascimentoNotValid: true };
        }
      };
      
    
  }
}
