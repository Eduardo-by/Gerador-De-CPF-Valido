import GeraCPF from './modules/GeraCPF'
import './assets/css/style.css'

class CPFGerado {
    CPFGeradocliqueNoBotao = () => {
        const gera = new GeraCPF()
        const cpfGerado = document.querySelector('.cpfGerado')
        document.addEventListener('click', (e) => {
            if (e.target.classList  .contains('btn')) cpfGerado.innerHTML = 'CPF GERADO: ' + gera.geraNovoCPF()
        })
    }
    inicia() {
        this.CPFGeradocliqueNoBotao()
    }
}
const cpf = new CPFGerado()
cpf.inicia()