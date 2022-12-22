import { Component, OnInit } from '@angular/core';
import { BlinkedQrComponent, BlinkedQrService } from 'blinked-qr/public-api';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  title = 'blinked';
  template: any = 'ocean';
  data: any = 'sample data';

  constructor(private testDI: BlinkedQrService) {
    // test DI!
  }
  /**
  * Download
  */
  onDownload2(qrcode: BlinkedQrComponent): void {
    qrcode.download('file-name.png').subscribe((res) => {
      // TO DO something!
      console.log('download:', res);
    });
  }


  ngOnInit() {
  }

}
