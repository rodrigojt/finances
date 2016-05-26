import {Page} from 'ionic-angular';


@Page({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
    constructor() {
        this.nome = "Rodrigo Teixeira"
    }

    // Exemplo de método
    getNome() {
        return "Nome retornado pelo método: " + this.nome;
    }
}
