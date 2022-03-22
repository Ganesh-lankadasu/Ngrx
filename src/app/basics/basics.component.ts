import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { BasicschildComponent } from './basicschild/basicschild.component';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styleUrls: ['./basics.component.css']
})
export class BasicsComponent implements OnInit {

  public code:string = 'Lets do code';

  disable:boolean = false;

  getVal:string;

  arr:number[]=[];

  valProperty:string

  @ViewChild('basicschild') text:BasicschildComponent;


  constructor(private comm:CommonService) { }

  ngOnInit(): void {

    this.comm.sub$.subscribe((res:any)=>{
      this.arr = res;
    })

  }

  show(){
    this.text.display();
  }
  getData(val){
    this.getVal = val
  }

}
