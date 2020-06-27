import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {

  person = {name: 'Mary', city: 'Houston'};

  aVar = 'zzzz';
  
  constructor() { }

  ngOnInit() {
  }

  changed(person){
    this.person = person;
    console.log('comp1:', this.person)
  }

  showPopup(s){
    alert(s);
  }



}