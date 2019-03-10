import './styles/main.scss';
import Greeting from './js/Greeting';
import Gallery from './js/Gallery';

class App {
    init () {
        const g1 = new Greeting('Cedric');
        console.log(g1.greet());

        console.log('Site loaded.');
        const gallery = new Gallery();
        gallery.init();
    }
}

const app = new App();
document.addEventListener('load', app.init());