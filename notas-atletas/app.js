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

let ordenaNotas = function (arrayDeAtletas) {
  arrayDeAtletas.forEach((atleta) => {
    atleta.notas = atleta.notas.sort(function (a, b) {
      return a - b;
    });
  });
  return arrayDeAtletas;
};

let retiraExtremos = function (arrayDeAtletas) {
  ordenaNotas(arrayDeAtletas).forEach((atleta) => {
    atleta.notas = atleta.notas.slice(1, 4);
  });
  return arrayDeAtletas;
};

let calculaMedia = function (arrayDeAtletas) {
  retiraExtremos(arrayDeAtletas).forEach(function (atleta) {
    atleta.media =
      atleta.notas.reduce(function (total, atual) {
        return total + atual;
      }, 0) / atleta.notas.length;
  });
  return arrayDeAtletas;
};

let mostraNotas = function (arrayDeAtletas) {
  calculaMedia(arrayDeAtletas);

  return arrayDeAtletas.forEach(function (atleta) {
    console.log(
      `Atleta: ${atleta.nome}\nNotas: ${atleta.notas}\nMedia: ${atleta.media}`
    );
  });
};

mostraNotas(atletas);
