import { personagens } from './../personagens';
import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
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

  listOfChars = personagens;
  filteredList: {path:string, name:string}[] = [];

  filterList(){
    const searchItem = this.inputChar.toLowerCase();
    this.filteredList = this.listOfChars.filter(item => item.name.toLowerCase().includes(searchItem));

    if(this.inputChar === ''){
      this.filteredList = [];
    }

  }

  onBlur() {
    setTimeout(() => {
      this.isInputFocus = false;
    }, 200); // Delay para permitir que o clique nos itens da lista seja registrado
  }

  optionClicked(name:string){
    this.inputChar = name;
    this.isInputFocus = false;
    this.filteredList = [];
  }

  onFocus() {
    this.isInputFocus = true;
  }

  onScroll(){
    console.log('eai');
  }



}
