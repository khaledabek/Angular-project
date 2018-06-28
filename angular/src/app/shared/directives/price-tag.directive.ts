import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appPriceTag]'
})
export class PriceTagDirective implements OnInit {

  @Input() amount;
  
  constructor( private elRef:ElementRef , private renderer: Renderer2) { }

  ngOnInit(){
      
    this.renderer.appendChild(this.elRef.nativeElement, 
        this.renderer.createText(this.amount?this.amount:"100") );  
  }
}