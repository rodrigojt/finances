import {Page, NavController} from 'ionic-angular';

/*
  Generated class for the ModalContasPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/modal-contas/modal-contas.html',
})
export class ModalContasPage {
  static get parameters() {
    return [[NavController]];
  }

  constructor(nav) {
    this.nav = nav;
  }
}
