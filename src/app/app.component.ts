import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import * as adapter from 'webrtc-adapter/out/adapter_no_global.js';
import * as RecordRTC from 'recordrtc';

import videojs from 'video.js';
import Record from 'videojs-record/dist/videojs.record.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // // Instancia do video.js.
  // player: any;
  // // Poster para ser usado no video.js
  // poster = '//d2zihajmogu5jn.cloudfront.net/elephantsdream/poster.png';
  // // URL do video a ser reproduzido.
  // video = '//d2zihajmogu5jn.cloudfront.net/elephantsdream/ed_hd.mp4';
  // // Acessa o elemento video do html5 via viewchild.

  // devices: any[];

  // @ViewChild('myvid', { static: true }) vid: ElementRef;

  // ngAfterViewInit() {
  //   const options = {
  //     controls: true,
  //     width: 320,
  //     height: 240,
  //     fluid: false,
  //     controlBar: {
  //         volumePanel: false,
  //         fullscreenToggle: false
  //     },
  //     plugins: {
  //         record: {
  //             image: true,
  //             debug: true
  //         }
  //     }
  //   };

//   var options = {
//     controls: true,
//     width: 320,
//     height: 240,
//     fluid: false,
//     controlBar: {
//         volumePanel: false,
//         fullscreenToggle: false
//     },
//     plugins: {
//         record: {
//           maxLength: 20,
//           debug: true,
//           audio: false,
//           video: {
//               // video constraints: use preset device
//               deviceId: {  }
//           }
//         }
//     }
// };

    // cam1: 2ea67d49459c2579b4708588b62a122a3b3c99a90c6eb8719eea1176430f892c
    // cam2: bb5a521090ec977c988c4c7948c0f6fa9eaefc1c9106c7eecd38d67fc8367bcc

  //   this.player = new videojs('myAudio', options, () => { });
  //   this.player.on('enumerateReady', () => {
  //     debugger;
  //     this.devices = this.player.record().devices;
  //   });

  //   setTimeout(() => {
  //     debugger;
  //     this.player.record().enumerateDevices();
  //   }, 3000);
  // }
}
