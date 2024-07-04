import { Component, ElementRef, Renderer2, ViewChild, viewChild } from '@angular/core';
import { GameHeaderComponent } from "../../header/game-header/game-header.component";
import { CompleteCharsComponent } from '../../complete-chars/complete-chars.component';
import { InfoBoxComponent } from '../../info-box/info-box.component';
import { gifs } from '../../scenesGifs';
import { Personagem } from '../../personagensBck';

@Component({
    selector: 'app-laugh-quiz',
    standalone: true,
    templateUrl: './laugh-quiz.component.html',
    styleUrl: './laugh-quiz.component.css',
    imports: [GameHeaderComponent, CompleteCharsComponent, InfoBoxComponent]
})
export class LaughQuizComponent {
  blurNumber = 8;
  imgBlur = 'blur(' + this.blurNumber + 'px) grayscale(1)';
  gifsScenes = gifs;
  todayGif = this.gifsScenes[Math.floor(Math.random() * 8)];

  charSelected(char:Personagem){
    if(!(char.nome.toLowerCase() === this.todayGif.nome.toLowerCase())){
      console.log(char.nome.toLowerCase() + this.todayGif.nome.toLowerCase());
      this.blurNumber-= 1;
      this.imgBlur = 'blur(' + this.blurNumber + 'px) grayscale(1)';
    }
    else{
      alert('Você acertou!!!');
      this.blurNumber = 1;
      this.imgBlur = 'none';
    }
  }

}
