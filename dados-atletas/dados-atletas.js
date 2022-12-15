class Atleta {
    constructor(nome, idade, peso, altura, notas) {
      this.nome = nome;
      this.idade = idade;
      this.peso = peso;
      this.altura = altura;
      this.notas = notas;
    }
    calculaCategoria() {
      let categoria = "";
      if (this.idade >= 9 && this.idade <= 11) {
        return "Infantil";
      } else if (this.idade === 12 || this.idade === 13) {
        return "Juvenil";
      } else if (this.idade === 14 || this.idade === 15) {
        return "Intermediário";
      } else if (this.idade >= 16 && this.idade <= 30) {
        return "Adulto";
      } else {
        return "Sem categoria";
      }
    }
    calculaIMC() {
      this.IMC = this.peso / this.altura ** 2;
      return this.IMC;
    }
    calculaMediaValida() {
      this.media =
        this.notas
          .sort((a, b) => a - b)
          .slice(1, 4)
          .reduce((total, atual) => total + atual, 0) / (this.notas.length - 2);
      return this.media;
    }
    obtemNomeAtleta() {
      return `Nome: ${this.nome}`;
    }
    obtemIdadeAtleta() {
      //que retorna a idade do atleta
      return `Idade: ${this.idade} anos`;
    }
    obtemPesoAtleta() {
      return `Peso: ${this.peso} kg`;
    }
    obtemNotasAtleta() {
      let fraseNota = "Notas: ";
      this.notas.forEach(function (nota) {
        fraseNota += `${nota}, `;
      });
      return fraseNota.replace(/, $/, "");
    }
    obtemCategoria() {
      return `Categoria: ${this.calculaCategoria()}`;
    }
    obtemIMC() {
      return `IMC: ${this.calculaIMC()}`;
    }
    obtemMediaValida() {
      return `Media Válida: ${this.calculaMediaValida()}`;
    }
  }
  
  const atleta = new Atleta("Cesar Abascal", 30, 80, 1.7, [ 10, 9.34, 8.42, 10, 7.88]);
  
  console.log(atleta.obtemNomeAtleta());
  console.log(atleta.obtemIdadeAtleta());
  console.log(atleta.obtemPesoAtleta());
  console.log(atleta.obtemNotasAtleta());
  console.log(atleta.obtemCategoria());
  console.log(atleta.obtemIMC());
  console.log(atleta.obtemMediaValida());
  console.log(atleta);