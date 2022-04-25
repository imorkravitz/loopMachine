import { Component, OnInit } from '@angular/core';
import { PeriodicElement } from '../table/table-data.model'
import { TableComponent } from '../table/table.component'

@Component({
  selector: 'app-bottom',
  templateUrl: './bottom.component.html',
  styleUrls: ['./bottom.component.css']
})
export class BottomComponent implements OnInit {
  loopVal:boolean = false;
  files:string[] = [];
  audios:any[] = [];
  isMuted:boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.audios = [
      new Audio('../../../assets/myAudio/_tambourine_shake_higher.mp3'),
      new Audio('../../../assets/myAudio/ALL TRACK.mp3'),
      new Audio('../../../assets/myAudio/B VOC.mp3'),
      new Audio('../../../assets/myAudio/DRUMS.mp3'),
      new Audio('../../../assets/myAudio/HE HE VOC.mp3'),
      new Audio('../../../assets/myAudio/HIGH VOC.mp3'),
      new Audio('../../../assets/myAudio/JIBRISH.mp3'),
      new Audio('../../../assets/myAudio/LEAD 1.mp3'),
      new Audio('../../../assets/myAudio/UUHO VOC.mp3')
    ]
  }

  async playSounds(){
    let i: number = 0;
    let flag = true;

    for (i; i < this.audios.length; i++) {
      let audio = this.audios[i];
      setTimeout(() => {
        audio.play();
      },17000*(i))
    }
  }


  enableLoop() {
    if (this.loopVal == false) {
      this.loopVal = true;
      this.audios[0].loop = true;
      this.audios[1].loop = true;
      this.audios[2].loop = true;
      this.audios[3].loop = true;
      this.audios[4].loop = true;
      this.audios[5].loop = true;
      this.audios[6].loop = true;
      this.audios[7].loop = true;
      this.audios[8].loop = true;
      this.audios[9].loop = true;
    }else if(this.loopVal == true){
      this.loopVal = false;
      this.audios[0].loop = false;
      this.audios[1].loop = false;
      this.audios[2].loop = false;
      this.audios[3].loop = false;
      this.audios[4].loop = false;
      this.audios[5].loop = false;
      this.audios[6].loop = false;
      this.audios[7].loop = false;
      this.audios[8].loop = false;
      this.audios[9].loop = false;
    }
  }

  stopSounds(){
    let i: number = 0;
    while(i<this.audios.length){
    this.audios[i].pause();
    i++;
    }
  }
}

