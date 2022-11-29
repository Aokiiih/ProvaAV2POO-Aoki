class veiculo {
    constructor (rodas, combustiel ){
        this.rodas = rodas;
        this.combustiel = combustiel;
    }
    acelerar() {
        console.log('Acelerou');
    }
}

class moto extends veiculo {
    constructor(rodas, combustiel, capacete) {
        super(rodas, combustiel, capacete);
            this.capacete = capacete;
        }
        acelerar() {
            console.log('Acelerou');
        }
        empinar(){
            console.log('Empinando');
        }
    }

const carro = new veiculo (4,5);
const honda = new moto (2, 'Gasolina', true);

