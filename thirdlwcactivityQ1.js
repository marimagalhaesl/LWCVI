import { LightningElement } from 'lwc';

export default class ThirdlwcactivityQ1 extends LightningElement {

    nome;
    peso;
    altura;
    imc;

    handleOnChangeNome(event){
        this.nome = event.target.value;
        console.log(this.nome);
    }

    handleOnChangePeso(event){
        this.peso = event.target.value;
        console.log(this.peso);
    }

    handleOnChangeAltura(event){
        this.altura = event.target.value;
        console.log(this.altura);
    }

    calcularIMC() {

        this.imc = `Olá ${this.nome}, seu IMC é ${(this.peso / (this.altura * this.altura)).toFixed(2)}`;

    }




}
