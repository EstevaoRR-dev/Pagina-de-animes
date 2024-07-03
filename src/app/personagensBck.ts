export class Personagem{

  nome:String;
  path:String;
  genero:String;
  filiacao:String;
  akumaNoMi:String;
  haki:Array<String>;
  ultimaRecompensa:String;
  altura:String;
  origem:String;
  primeiroArco:String;

  constructor(nome:String, path:String, genero:String, filiacao:String, akumaNoMi:String, haki:Array<String>,
     ultimaRecompensa:String, altura:String, origem:String, primeiroArco:String){
    this.nome = nome;
    this.path = path;
    this.genero = genero;
    this.filiacao = filiacao;
    this.akumaNoMi = akumaNoMi;
    this.haki = haki;
    this.ultimaRecompensa = ultimaRecompensa;
    this.altura = altura;
    this.origem = origem;
    this.primeiroArco = primeiroArco;
  }
}

