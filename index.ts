// Importa as classes que serão utilizadas no programa
import { Carro } from "./src/models/Carro.js";
import { Moto } from "./src/models/Moto.js";
import { Veiculo } from "./src/models/Veiculo.js";

console.log("=== SISTEMA DE VEICULOS ===");

// Cria um objeto da classe Carro e informa seus dados
const carro = new Carro({
    placa: "AKD-0936",
    modelo: "Monza",
    marca: "Chevrolet",
    ano: 1983,
    qtdPortas: 4
});

// Cria um objeto da classe Moto e informa seus dados
const moto = new Moto({
    placa: "XYZ-5678",
    modelo: "XJ6",
    marca: "Yamaha",
    ano: 2023,
    cilindradas: 160
});

console.log("\n--- DEMONSTRACAO DE POLIMORFISMO ---");

// O array aceita objetos que herdam da classe Veiculo
const veiculos: Veiculo[] = [carro, moto];

// Percorre os veículos e chama o método de cada objeto
for (const veiculo of veiculos) {
    veiculo.exibirDados();
    console.log("--------------------");
}