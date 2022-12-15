let atletas = [
  {
    nome: "Cesar Abascal",
    notas: [10, 9.34, 8.42, 10, 7.88]
  },
  {
    nome: "Fernando Puntel",
    notas: [8, 10, 10, 7, 9.33]
  },
  {
    nome: "Daiane Jelinsky",
    notas: [7, 10, 9.5, 9.5, 8]
  },
  {
    nome: "Bruno Castro",
    notas: [10, 10, 10, 9, 9.5]
  }
];

class Atleta {
  constructor(atleta) {
    this.nome = atleta.nome;
    this.notas = atleta.notas;
    this.notas = this.notas.sort(function (a, b) {
      return a - b;
    });
    this.notas = this.notas.slice(1, 4);
    this.media = this.notas.reduce((total, atual) => total + atual, 0) / this.notas.length;
  }
}

let mostraMedia = (listaDeAtletas) => {
  let string = "";
  for (let i = listaDeAtletas.length - 1; i >= 0; i--) {
    let atleta = new Atleta(listaDeAtletas[i]);
    string = `Atleta: ${atleta.nome}\nNotas: ${atleta.notas}\nMedia: ${atleta.media}\n\n` + string;
  }
  return string;
};

console.log(mostraMedia(atletas));
mostraNotas(atletas);
