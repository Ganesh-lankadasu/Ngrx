import { Directive, ElementRef, OnInit, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {

  constructor(private ele:ElementRef,private render:Renderer2) { }

  ngOnInit(){
  }

  @HostListener('mouseenter') onmouseover(){
    this.render.setStyle(this.ele.nativeElement,'background-color','red')
  }

  @HostListener('mouseleave') onmouseout(){
    this.render.setStyle(this.ele.nativeElement,'background-color','white');
  }
}
