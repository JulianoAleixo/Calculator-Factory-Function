function criaCalculadora() {
    return {
        display: document.querySelector('.display'),

        inicia() {
            this.clickButtons();
            this.pressEnter()
        },

        pressEnter() {
            this.display.addEventListener('keyup', (e) => {
                if (e.keyCode === 13) {
                    this.doTheMath();
                }
            });
        },

        doTheMath() {
            let conta = this.display.value;

            try {
                conta = eval(conta);

                if(!conta) {
                    alert('[ERRO] Conta inválida!');
                }
                
                this.display.value = String(conta);
            } catch (error) {
                alert('[ERRO] Conta inválida!');
                return;
            }
        },

        clearDisplay() {
            this.display.value = '';
        },
        deleteOne() {
            this.display.value = this.display.value.slice(0, -1);
        },

        clickButtons() {
            document.addEventListener('click', (e) => {
                const el = e.target;

                if(el.classList.contains('btn-num')) {
                    this.btnToDisplay(el.innerText);
                }
                if(el.classList.contains('btn-clear')) {
                    this.clearDisplay();
                }
                if(el.classList.contains('btn-del')) {
                    this.deleteOne();
                }
                if(el.classList.contains('btn-eq')) {
                    this.doTheMath();
                }
            });
        },

        btnToDisplay(valor) {
            this.display.value += valor;
        }
    };
}

const calculadora = criaCalculadora();
calculadora.inicia();