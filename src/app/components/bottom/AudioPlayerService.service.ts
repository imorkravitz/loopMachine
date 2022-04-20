import { Injectable } from '@angular/core'

@Injectable()
export class AudioPlayerService {

    playbackEndedSource = new Subject<string>();
    playbackEnded$ = this.playbackEndedSource.asObservable();

    constructor() {
        // this.audio initialization
        audio = new Audio();
        this.audio.addEventListener('ended', () => this.playbackEndedSource.next());

    }

    play(path: string): void {
        this.audio.src = path;
        this.audio.load();
        this.audio.play();
    }

}

