import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { BasicschildComponent } from './basicschild/basicschild.component';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styleUrls: ['./basics.component.css']
})
export class BasicsComponent implements OnInit {

  public code:string = 'Lets do code';

  disable:boolean = false;

  getVal:string;

  @ViewChild('basicschild') text:BasicschildComponent;


  constructor() { }

  ngOnInit(): void {
  }

  show(){
    this.text.display();
  }
  getData(val){
    this.getVal = val
  }

}
