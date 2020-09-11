import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[adHost]'
})
export class AdDirective {

  // inject ViewContainerRef to gain access to the view container of the element that will host
  // the dynamically added component
  constructor(public viewContainerRef: ViewContainerRef) { }

}