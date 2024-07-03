import { Personagem } from './../personagensBck';
import { personagens } from './../personagens';
import { Component, EventEmitter, Output} from '@angular/core';
import { NgStyle, NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-complete-chars',
  standalone: true,
  imports: [NgStyle, NgClass, FormsModule],
  templateUrl: './complete-chars.component.html',
  styleUrl: './complete-chars.component.css'
})
export class CompleteCharsComponent{

  isInputFocus:boolean = false;
  inputChar= '';

  listOfChars:Array<Personagem> = [];
  filteredList: {path:String, nome:String}[] = [];
  @Output() charChoosen = new EventEmitter<Personagem>();

  constructor(){
    personagens.forEach(item => {
      this.listOfChars.push(new Personagem(item.name, item.path, item.genero, item.filiacao, item.akumaNoMi,
        item.haki, item.ultimaRecompensa, item.altura, item.origem, item.primeiroArco
      ));
    })
  }

  filterList(){
    const searchItem = this.inputChar.toLowerCase();
    this.filteredList = this.listOfChars.filter(item => item.nome.toLowerCase().includes(searchItem));

    if(this.inputChar === ''){
      this.filteredList = [];
    }

  }

  onBlur() {
    setTimeout(() => {
      this.isInputFocus = false;
    }, 200); // Delay para permitir que o clique nos itens da lista seja registrado
  }

  optionClicked(char:Personagem){
    this.isInputFocus = false;
    this.filteredList = [];
    this.charSelected(char);
  }

  onFocus() {
    this.isInputFocus = true;
  }

  charSelected(char:Personagem):void{
    this.charChoosen.emit(char);
    this.inputChar = '';
  }

  getCharOnNameList(charName: {path:String, nome:String}): void{

    const result =  this.listOfChars.find(item => item.nome === charName.nome);

    if(result){
      const trueResult = new Personagem(result?.nome, result?.path, result?.genero, result?.filiacao, result?.akumaNoMi,
       result?.haki, result?.ultimaRecompensa, result?.altura, result?.origem, result?.primeiroArco);
      this.optionClicked(trueResult);
    }
  }
}
