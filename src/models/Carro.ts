import { CarroProps } from "../interface/VeiculoProps.js";
import { Veiculo } from "./Veiculo.js";

// Carro herda os atributos e métodos da classe Veiculo
export class Carro extends Veiculo<CarroProps> {

    // Getter para consultar a quantidade de portas
    public get getQtdPortas(): number {
        return this.props.qtdPortas;
    }

    // Setter para alterar a quantidade de portas
    public set setQtdPortas(novaQtd: number) {
        if (novaQtd <= 0) {
            console.log("A quantidade de portas nao pode ser zero ou negativa.");
            return;
        }
        this.props.qtdPortas = novaQtd;
    }

    // Implementa o método abstrato definido em Veiculo
    public exibirDados(): void {
        console.log(`Placa: ${this.getPlaca}`);
        console.log(`Modelo: ${this.getModelo}`);
        console.log(`Marca: ${this.getMarca}`);
        console.log(`Ano: ${this.getAno}`);

        // Exibe a informação exclusiva do carro
        console.log(`Quantidade de portas: ${this.getQtdPortas}`);
    }
}