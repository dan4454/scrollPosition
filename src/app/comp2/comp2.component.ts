import { Component, OnInit , Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {

  @Input()  person;

  @Input() parent;

  person2 = {name: 'oeoeoeoe'};

  @Output() ev = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  changeName(s){
    this.person.name = s;
    this.ev.emit(this.person);
    console.log('comp2:', this.person);
  }

  call22(s) {
    this.person.city = 'kdkdkdkdk';
    this.person.name = 'aaaaaa';
    this.ev.emit(this.person);
    console.log('there you go: ', s)
  }

  popup() {
    this.parent.showPopup('Hello from comp2');
  }


}