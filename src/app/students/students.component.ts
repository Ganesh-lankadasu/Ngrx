import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  arrCo:number[]=[]

  constructor(private comm:CommonService) { }

  ngOnInit(): void {
    
    if(JSON.parse(localStorage.getItem('arrLocal')) === null){
      localStorage.setItem('arrLocal',JSON.stringify(this.arrCo))
    }
    else{
      this.arrCo = JSON.parse(localStorage.getItem('arrLocal'));
    }
  }

  send(val){
    this.arrCo.push(val.value);
    console.log(this.arrCo)
    this.comm.sub$.next(this.arrCo);
    localStorage.setItem('arrLocal',JSON.stringify(this.arrCo))
  }


}
