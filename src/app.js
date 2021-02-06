import Utils from '../src/service/Utils'

//Imports 
import Home from './views/pages/Home'
import Error404 from './views/pages/Error'

//routes
let routes = {
    '/' : Home 
}

const router = async () => {
    const root = null || document.getElementById('root')

    // Obter URL do Navegador 
    let request  = Utils.parseRequestURL();

    // Analisar a URL 
    let parseURL = (request.resource ? '/' + request.resource: '/' ) + (request.id ? '/:id' + request.id: '' ) + (request.verb ? '/' + request.verb: '' )

    let page = routes[parseURL] ? routes[parseURL] : Error404
    root.innerHTML = await page.render()
    await page.after_render();
}

// Observa as mudanças na hash
window.addEventListener('hashchange', router);

//observa o carregamento da pagina da pagina
window.addEventListener('load', router);
