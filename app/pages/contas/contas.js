import {Page, Modal, NavController} from 'ionic-angular';
import {DAOContas} from '../../dao/dao-contas';
import {ModalContasPage} from '../modal-contas/modal-contas'

@Page ({
    templateUrl: "build/pages/contas/contas.html"
})

export class ContasPage {
    static get parameters() {
        return [[NavController]]
    }

    construct() {
        this.dao = new DAOContas();
        this.listContas = this.dao.getList();
    }

    insert() {
        // Variável de escopo localizado
        let modal = Modal.create(ModalContasPage)
        // TODO: Continuar na 3ª aula (17:45)
    }
}