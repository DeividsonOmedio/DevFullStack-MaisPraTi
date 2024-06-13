const prompt = require('prompt-async');

let hoteis = [];
let reservas = [];
let idHotelCounter = 1;
let idReservaCounter = 1;

class Hotel {
    constructor(nome, cidade, quartosTotais) {
        this.id = idHotelCounter++;
        this.nome = nome;
        this.cidade = cidade;
        this.quartosTotais = quartosTotais;
        this.quartosDisponiveis = quartosTotais;
    }
}

class Reserva {
    constructor(idHotel, nomeCliente) {
        this.idReserva = idReservaCounter++;
        this.idHotel = idHotel;
        this.nomeCliente = nomeCliente;
    }
}

async function adicionarHotel() {
    await prompt.start();
    const { nome, cidade, quartosTotais } = await prompt.get(['nome', 'cidade', 'quartosTotais']);
    const hotel = new Hotel(nome, cidade, parseInt(quartosTotais, 10));
    hoteis.push(hotel);
    console.log('Hotel adicionado com sucesso:', hotel);
}

async function buscarHoteisPorCidade() {
    await prompt.start();
    const { cidade } = await prompt.get(['cidade']);
    const hoteisEncontrados = hoteis.filter(hotel => hotel.cidade.toLowerCase() === cidade.toLowerCase());
    console.log('Hotéis encontrados na cidade:', cidade);
    hoteisEncontrados.forEach(hotel => console.log(hotel));
}

async function fazerReserva() {
    await prompt.start();
    const { idHotel, nomeCliente } = await prompt.get(['idHotel', 'nomeCliente']);
    const hotel = hoteis.find(h => h.id === parseInt(idHotel, 10));
    
    if (!hotel) {
        console.log('Hotel não encontrado.');
        return;
    }
    
    if (hotel.quartosDisponiveis > 0) {
        const reserva = new Reserva(hotel.id, nomeCliente);
        reservas.push(reserva);
        hotel.quartosDisponiveis--;
        console.log('Reserva feita com sucesso:', reserva);
    } else {
        console.log('Não há quartos disponíveis.');
    }
}

async function cancelarReserva() {
    await prompt.start();
    const { idReserva } = await prompt.get(['idReserva']);
    const reserva = reservas.find(r => r.idReserva === parseInt(idReserva, 10));
    
    if (!reserva) {
        console.log('Reserva não encontrada.');
        return;
    }

    const hotel = hoteis.find(h => h.id === reserva.idHotel);
    hotel.quartosDisponiveis++;
    reservas = reservas.filter(r => r.idReserva !== parseInt(idReserva, 10));
    console.log('Reserva cancelada com sucesso:', reserva);
}

function listarReservas() {
    console.log('Lista de todas as reservas:');
    reservas.forEach(reserva => {
        const hotel = hoteis.find(h => h.id === reserva.idHotel);
        console.log(`Reserva ID: ${reserva.idReserva}, Cliente: ${reserva.nomeCliente}, Hotel: ${hotel.nome}, Cidade: ${hotel.cidade}`);
    });
}

module.exports = {
    adicionarHotel,
    buscarHoteisPorCidade,
    fazerReserva,
    cancelarReserva,
    listarReservas
};
