import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bottom',
  templateUrl: './bottom.component.html',
  styleUrls: ['./bottom.component.css']
})
export class BottomComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  playSounds(){
    let audio = new Audio();
    audio.src = "../../../assets/_tambourine_shake_higher.mp3"
    audio.load();
    audio.play();
  }


  stopSounds(){
    let audio = new Audio();
    audio.pause();
  }

}
