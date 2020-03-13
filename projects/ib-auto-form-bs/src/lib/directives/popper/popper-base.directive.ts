import {Directive, Input, TemplateRef} from "@angular/core";
import {PopoverPosition} from "./../../models/popover";

@Directive({
  selector: '[ibPopoverBase]'
})
export class PopoverBaseDirective {
  @Input() popoverBody: TemplateRef<any>;
  @Input() position: PopoverPosition = PopoverPosition.TOP;

  show() {
  }

  hide() {
  }
}
