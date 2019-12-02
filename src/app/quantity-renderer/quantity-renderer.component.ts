import { Component } from '@angular/core';

@Component({
  selector: 'app-quantity-renderer',
  templateUrl: './quantity-renderer.component.html',
  styleUrls: ['./quantity-renderer.component.scss']
})
export class QuantityRendererComponent {
  public params:any;

  constructor() { }

  agInit(params:any):void {
    
    this.params = params;
   // console.log(params.data.quantity)
   // if(!this.params.quantity){
   //   this.params.quantity = 1;
   // }
  }

}
