import { Personagem } from './../personagensBck';
import { personagens } from './../personagens';
import { AfterViewInit, Component, ElementRef, EventEmitter, Output, ViewChild} from '@angular/core';
import { NgStyle, NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-complete-chars',
  standalone: true,
  imports: [NgStyle, NgClass, FormsModule],
  templateUrl: './complete-chars.component.html',
  styleUrl: './complete-chars.component.css'
})
export class CompleteCharsComponent {

  isInputFocus:boolean = false;
  inputChar= '';
  autocompleteShow = false;
  autocomplete2Show = true;

  listOfChars:Array<Personagem> = [];
  filteredList: {path:String, nome:String}[] = [];
  @Output() charChoosen = new EventEmitter<Personagem>();

  @ViewChild('target') target!: ElementRef;

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

    this.setupViewIntercepted();

    if(this.inputChar === ''){
      this.filteredList = [];
      this.autocompleteShow = false;
    }

  }

  onBlur() {
    setTimeout(() => {
      this.isInputFocus = false;
    }, 200);
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

  setupViewIntercepted(){
    if(this.inputChar != ''){
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if(entry.intersectionRatio === 1){
            this.autocompleteShow = true;
            this.autocomplete2Show = true;
            if(this.inputChar === ''){
              this.autocompleteShow = false;
            }
          }
          else{
            this.autocompleteShow = false;
            this.autocomplete2Show = false;
          }
        });
      }, {threshold: [0,1]})

      observer.observe(this.target.nativeElement);
    }

  }
}
