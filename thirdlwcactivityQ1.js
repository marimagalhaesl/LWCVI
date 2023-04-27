import { LightningElement } from 'lwc';

export default class ThirdlwcactivityQ1 extends LightningElement {

    nome;
    peso;
    altura;
    imc;


    handleOnChange(event) {
        const inputName = event.target.name;
        const value = event.target.value;

        if(inputName == 'nome') {
            this.nome = value;
            console.log(this.nome);
        } else if (inputName == 'peso') {
            this.peso = parseFloat(value);
            console.log(this.peso);
        } else if (inputName == 'altura') {
            this.altura = parseFloat(value);
            console.log(this.altura);
        }
    }

    /*
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
    }*/

    calcularIMC() {

        if(this.altura == null || this.peso == null) {
            alert("Preencha altura e peso");
        } else {
            this.imc = `Olá ${this.nome}, seu IMC é ${(this.peso / (this.altura * this.altura)).toFixed(2)}`;
        }
    }




}
