import { MotoProps } from "../interface/VeiculoProps.js";
import { Veiculo } from "./Veiculo.js";

// Moto herda os atributos e métodos da classe Veiculo
export class Moto extends Veiculo<MotoProps> {

    // Getter para consultar as cilindradas
    public get getCilindradas(): number {
        return this.props.cilindradas;
    }

    // Setter para alterar as cilindradas
    public set setCilindradas(novaCilindrada: number) {
        if (!novaCilindrada) {
            console.log("As cilindradas nao podem ficar vazias.");
            return;
        }
        this.props.cilindradas = novaCilindrada;
    }

    // Implementa o método abstrato definido em Veiculo
    public exibirDados(): void {
        console.log(`Placa: ${this.getPlaca}`);
        console.log(`Modelo: ${this.getModelo}`);
        console.log(`Marca: ${this.getMarca}`);
        console.log(`Ano: ${this.getAno}`);

        // Exibe a informação exclusiva da moto
        console.log(`Cilindradas: ${this.getCilindradas}`);
    }
}