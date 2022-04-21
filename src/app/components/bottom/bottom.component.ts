import { Component, OnInit } from '@angular/core';
import { PeriodicElement } from '../table/table-data.model'
import { TableComponent } from '../table/table.component'

@Component({
  selector: 'app-bottom',
  templateUrl: './bottom.component.html',
  styleUrls: ['./bottom.component.css']
})
export class BottomComponent implements OnInit {
  // audio = new Audio();
  loopVal:boolean = false;

  constructor() { }

  files:string[] = [];
  audios:any[] = [];
  isMuted:boolean = false;


  ngOnInit(): void {
    // this.files = ['LEAD 1', 'UUHO VOC','HIGH VOC','JIBRISH','DRUMS','HE HE VOC','ALL TRACK', 'B VOC','_tambourine_shake_higher']
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

    while (i < this.audios.length){
      if (flag) {
        this.audios[i].play();
        flag = false;
      }else {
        this.audios[i+1].play();
        flag = true;
      }
      i++;
    }
    // await this.audios[7].play()
    // console.log(this.audios[7].play());

    // if (this.audios[7].currentTime > 0) {
    //   // await this.audios[1].play()
    // }
    // await this.audios[7].play()
    // while (i<this.audios.length) {
    //   if (flag) {
    //     await this.audios[i].play();

    //   }
    //   flag = false;
    //   if (!await this.audios[i].play()) {
    //     i++;
    //     flag = true;
    //   }
    //   // this.audio = new Audio('../../../assets/myAudio/'+this.files[i]+'.mp3');
    //   // this.audio.play();
    // }
  }


  enableLoop() {
    let i: number = 0;
    while(i<this.audios.length){
    this.audios[i].loop = true;
    this.audios[i].play();
    this.loopVal = true;

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

