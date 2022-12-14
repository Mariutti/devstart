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
  
      
  class Atletas{
    constructor(atletas){
      this.atletas = atletas
    }
  
  // Calcula a media valida do atleta
//     calculaMediaValida() {
//         // Ordenando as notas
//         this.notas = this.notas.sort();

//         // Eliminando a maior e menor nota
//         this.notas = this.notas.slice(1, 4);

//         // Calculando a media
//         // Acumulador para salvar a soma das notas
//         var acumulador = 0;
//         // Metodo forEach para somar as notas
//         this.notas.forEach((nota) => {
//         acumulador = nota + acumulador;
//         });

//         // Calculo da media utilizando o acumulador e a quantidade de notas
//         let mediaValida = acumulador / this.notas.length;

//         // Retorna a media valida do atleta
//         return mediaValida;
//    }
  }
  
  let objAtletas = new Atletas(atletas)
  
  console.log(objAtletas)