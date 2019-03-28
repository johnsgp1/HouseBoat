import { Component, OnInit, ViewChild } from '@angular/core';
import {OwlCarousel} from 'ngx-owl-carousel';
import { DeviceDetectorService } from 'ngx-device-detector';
import * as $ from 'jquery';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @ViewChild('owlElement') owlElement: OwlCarousel
  title = 'owl-carousel-with-angular6';
  deviceInfo;
  isDesktopDevice;
  isMobile;
  //This is to generate random placeholder images
  mySlideImages = [1,2,3].map((i)=> `https://picsum.photos/640/480?image=${i}`);
  myCarouselImages = [1,2,3,4,5,6].map((i)=> `https://picsum.photos/640/480?image=${i}`);
  mySlideOptions={items: 1, dots: true, nav: false};
  myCarouselOptions={items: 1, dots: true, nav: true};
  public imagesUrl:any;
  constructor(private deviceService: DeviceDetectorService) {
    this.epicFunction();
   }
  
  ngOnInit() {
    if(this.isDesktopDevice===true){
      alert("hi");
      $('.tourpack').css('margin-right','15px');
    }
    this.owlElement.next([200])
    this.imagesUrl = [
      'assets/images/traveler-3.jpg',
      'assets/images/traveler-3.jpg',
      'assets/images/traveler-3.jpg',
      'assets/images/traveler-3.jpg',
      'assets/images/traveler-3.jpg',
      ];
  }
  nextSilde(){
    this.owlElement.next([200])
  }
  prevSilde(){
    this.owlElement.previous([200])
  }
  epicFunction() {
    console.log('hello `Home` component');
    this.deviceInfo = this.deviceService.getDeviceInfo();
    this.isMobile = this.deviceService.isMobile();
    const isTablet = this.deviceService.isTablet();
    this.isDesktopDevice = this.deviceService.isDesktop();
    console.log(this.deviceInfo);
    console.log(this.isMobile);  // returns if the device is a mobile device (android / iPhone / windows-phone etc)
    console.log(isTablet);  // returns if the device us a tablet (iPad etc)
    console.log(this.isDesktopDevice); // returns if the app is running on a Desktop browser.
  }
}
