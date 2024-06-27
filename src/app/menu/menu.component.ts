import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

  @Output() classicQuiz = new EventEmitter<number>();

  goToClassicQuiz(id:number){
    this.classicQuiz.emit(id);
  }
}
