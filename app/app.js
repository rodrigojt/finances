import {App, Platform} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {HomePage} from './pages/home/home';

/* Decorator - Defini a função da classe (App, Page) */
@App({
    // Propriedade para identificar a página
    template: '<ion-nav [root]="rootPage"></ion-nav>',
    config: {} // http://ionicframework.com/docs/v2/api/config/Config/
})

/* Classe */
export class MyApp {
    static get parameters() {
        return [[Platform]];
    }

    /* Método construtor */
    constructor(platform) {
        this.rootPage = HomePage;

        /* Evento disparado quando a aplicação estiver carregada */
        platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            StatusBar.styleDefault();
        });
    }
}
