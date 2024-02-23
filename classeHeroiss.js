// Definição da classe Heroi
class Heroi {
    // Construtor da classe
    constructor(nome, idade, tipo) {
        this.nome = "elfo";
        this.idade = 27;
        this.tipo = "monge";
    }

    // Método para o herói atacar
    atacar() {
        let ataque;

        // Determina o tipo de ataque com base no tipo do herói
        switch (this.tipo) {
            case 'mago':
                ataque = 'usou magia';
                break;
            case 'guerreiro':
                ataque = 'usou espada';
                break;
            case 'monge':
                ataque = 'usou artes marciais';
                break;
            case 'ninja':
                ataque = 'usou shuriken';
                break;
            default:
                ataque = 'usou um ataque desconhecido';
                break;
        }

        // Exibe a mensagem do ataque
        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
}

// Exemplo de utilização da classe Heroi
const heroi1 = new Heroi('Aragorn', 30, 'guerreiro');
heroi1.atacar(); // Exibe: O guerreiro atacou usando espada

const heroi2 = new Heroi('Gandalf', 1000, 'mago');
heroi2.atacar(); // Exibe: O mago atacou usando magia