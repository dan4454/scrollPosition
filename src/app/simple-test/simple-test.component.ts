import { Component, OnInit, ɵɵresolveBody } from '@angular/core';

@Component({
  selector: 'app-simple-test',
  templateUrl: './simple-test.component.html',
  styleUrls: ['./simple-test.component.css']
})
export class SimpleTestComponent implements OnInit {

  visible = true;
  pos;

  constructor() { }

  ngOnInit(): void {
  }

  hide() {
    this.pos = window.scrollY;
    console.log('hiding: ', this.pos);
    this.visible = false;

  }

  reset() {
    window.document.documentElement.scrollTop = this.pos;

  }

  display() {
    this.visible = true;
    // window.document.documentElement.scrollTop = this.pos;
    // window.scrollTo(0, this.pos);

    setTimeout(() => {
      // console.log("hello");
      window.scrollTo(0, this.pos);
    }, 1);
  }


}
