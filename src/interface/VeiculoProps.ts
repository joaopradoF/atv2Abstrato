// Define os dados que todo veículo deve possuir
export interface VeiculoProps {
    placa: string;
    modelo: string;
    marca: string;
    ano: number;
}

// Herda os dados de VeiculoProps e adiciona a quantidade de portas
export interface CarroProps extends VeiculoProps {
    qtdPortas: number;
}

// Herda os dados de VeiculoProps e adiciona as cilindradas
export interface MotoProps extends VeiculoProps {
    cilindradas: number;
}