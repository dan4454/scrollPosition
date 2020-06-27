import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp4',
  templateUrl: './comp4.component.html',
  styleUrls: ['./comp4.component.css']
})
export class Comp4Component implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('Child 4 inited');
  }

restore(){
  window.document.documentElement.scrollTop = 500;
}

}
