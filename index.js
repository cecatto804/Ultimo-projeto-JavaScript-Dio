class hero {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;

        switch (this.tipo) {
            case 'mago':
                ataque = 'magia';
                break;
            case 'guerreiro':
                ataque = 'espada';
                break;
            case 'monge':
                ataque = 'artes marciais';
                break;
            case 'ninja':
                ataque = 'shuriken';
                break;
            default:
                ataque = 'não tem um ataque definido';
        }

        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
}

const heroi1 = new hero('Harry', 15, 'mago');
heroi1.atacar();

const heroi2 = new hero('Aragorn', 30, 'guerreiro');
heroi2.atacar(); 

const heroi3 = new hero('Bruce', 25, 'monge');
heroi3.atacar();

const heroi4 = new hero('Naruto', 20, 'ninja');
heroi4.atacar();