import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { KjuaEcLevel, KjuaMode, KjuaRender } from 'ngx-kjua';

@Component({
  selector: 'app-qrcode',
  templateUrl: './qrcode.component.html',
  styleUrls: ['./qrcode.component.css']
})
export class QrcodeComponent implements OnInit {

  title(title: any) {
    throw new Error('Method not implemented.');
  }
  text = " https://www.youtube.com/";
  render: KjuaRender = "svg";
  crisp = true;
  minVersion = 1;
  ecLevel: KjuaEcLevel = "H";
  size = 250;
  ratio = undefined;
  fill = "#333333";
  back = "#ffffff";
  rounded = 0;
  quiet = 1;
  mode: KjuaMode = "label";
  mSize = 30;
  mPosX = 50;
  mPosY = 50;
  mSize2 = 30;
  mPosX2 = 50;
  mPosY2 = 50;
  label = "";
  fontname = "";
  fontcolor = "#ff9818";
  fontoutline = true;
  imageAsCode = false;
  imageText = "";
  imgNativeElement = undefined;
  elementId = "";


  @ViewChild("imgBuffer")
  imageElement!: ElementRef;

  ngAfterViewInit(): void {
    setTimeout(
      () => (this.imgNativeElement = this.imageElement.nativeElement),
      500
    );
  }

  /**
   * Not perfect, I know
   * @param event
   */
  getFiles(event: any) {
    if (event.target.files.length > 0) {
      const reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]); // read file as data url
      reader.onload = (event2: any) => {
        // called once readAsDataURL is completed
        this.imageElement.nativeElement.src = event2.target.result;
        this.imgNativeElement = this.imageElement.nativeElement;
      };
    }
  }

  get image() {
    if (!!this.imageText && this.imageText.length > 0) {
      return this.imageText;
    } else {
      return this.imgNativeElement;
    }
  }

  ngOnInit() {
  }

}
