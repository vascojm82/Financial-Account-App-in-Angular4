import { Directive, OnDestroy, Input, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[callback]'
})
export class CallbackDirective {
  @Input('callback') callback:(param?: any) => any;

  constructor() {
  }

  @Input('callback-condition')
  set condition(value: any) {
      if (value==false) return;

      if (this.callback) {
        this.callback();
        console.log("callback called");
      }
      else console.error("callback is null");
  }
}
