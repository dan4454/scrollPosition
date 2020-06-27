import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp3',
  templateUrl: './comp3.component.html',
  styleUrls: ['./comp3.component.css']
})
export class Comp3Component implements OnInit {
  showChild = true;

  pos;

  constructor() { }

  ngOnInit() { }

  reShow() {
    this.pos = window.scrollY;
    console.log('scrollY: ', this.pos);
    this.showChild = false;
  }

  showAgain() {
    this.showChild = true;
    setTimeout(() => {
      // console.log("hello");
      window.document.documentElement.scrollTop = this.pos;
    }, 20);
    // alert('a');
  }
}
