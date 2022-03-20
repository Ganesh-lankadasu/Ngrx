import { Component, OnInit, ContentChild, ElementRef, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-basicschild',
  templateUrl: './basicschild.component.html',
  styleUrls: ['./basicschild.component.css']
})
export class BasicschildComponent implements OnInit {

  @ContentChild('bas') bas:ElementRef;

  @Input('basicscode') code;

  @Output() sendData = new EventEmitter(); 

  constructor() { }

  ngOnInit(): void {
  }

  display(){
    (this.bas.nativeElement as HTMLElement).style.background = 'red';
  }

  send(){
    this.sendData.emit('Independent one');
  }

}
