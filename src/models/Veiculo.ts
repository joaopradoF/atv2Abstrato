import { VeiculoProps } from "../interface/VeiculoProps.js";

// Classe abstrata que serve de base para Carro e Moto
// O tipo genérico T permite adicionar dados específicos de cada veículo
export abstract class Veiculo<T extends VeiculoProps = VeiculoProps> {

    // Guarda os dados e permite acesso às classes filhas
    constructor(protected props: T) { }

    // Getters: permitem consultar os dados do veículo
    public get getPlaca(): string { return this.props.placa; }
    public get getModelo(): string { return this.props.modelo; }
    public get getMarca(): string { return this.props.marca; }
    public get getAno(): number { return this.props.ano; }

    // Setter: altera a placa somente se ela não estiver vazia
    public set setPlaca(novaPlaca: string) {
        if (novaPlaca.trim() === "") {
            console.log("A placa nao pode ficar vazia.");
            return;
        }
        this.props.placa = novaPlaca;
    }

    // Altera o modelo após verificar se não está vazio
    public set setModelo(novoModelo: string) {
        if (novoModelo.trim() === "") {
            console.log("O modelo nao pode ficar vazio.");
            return;
        }
        this.props.modelo = novoModelo;
    }

    // Altera a marca após verificar se não está vazia
    public set setMarca(novaMarca: string) {
        if (novaMarca.trim() === "") {
            console.log("A marca nao pode ficar vazia.");
            return;
        }
        this.props.marca = novaMarca;
    }

    // Altera o ano após verificar se o valor não é zero ou negativo
    public set setAno(novoAno: number) {
        if (novoAno <= 0) {
            console.log("O ano nao pode ficar vazio.");
            return;
        }
        this.props.ano = novoAno;
    }

    // Obriga as classes filhas a implementar seu próprio método
    public abstract exibirDados(): void;
}