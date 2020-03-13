import {
  AfterViewInit,
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  OnDestroy,
  OnInit,
  Output,
  Renderer2,
  ViewContainerRef
} from "@angular/core";
import Popper, {PopperOptions} from 'popper.js';
import {PopoverBaseDirective} from "./popover-base.directive";

@Directive({
  selector: '[appPopper]'
})
export class PopperDirective extends PopoverBaseDirective implements OnInit, OnDestroy {

  @Output() targetClick: EventEmitter<boolean> = new EventEmitter<boolean>();
  private target: HTMLElement;
  private popper: Popper;
  private readonly defaultConfig: PopperOptions = {
    removeOnDestroy: true
  };

  @HostListener('document:click', ['$event'])
  clickOutside(event) {
    if (!this.el.nativeElement.contains(event.target)) {
      // console.log("clicked outside!");
      this.hide();
    } else {
      // console.log("clicked inside!");
      this.show();
      this.targetClick.emit(true);
    }
  }

  constructor(private readonly el: ElementRef, private viewContainer: ViewContainerRef, private renderer: Renderer2) {
    super();
  }

  show() {
    this.renderer.removeStyle(this.target, 'display');
    this.popper.update();
  }

  hide() {
    this.renderer.setStyle(this.target, 'display', 'none');
  }

  ngOnInit(): void {
    if(this.popoverBody){
      const targetEmbeddedView = this.viewContainer.createEmbeddedView(this.popoverBody);
      this.target = targetEmbeddedView.rootNodes[0];
      this.createPoper();
    }
  }

  private createPoper() {
    // An element to position the hint relative to
    const referenceWidth = this.el.nativeElement.getBoundingClientRect() && this.el.nativeElement.getBoundingClientRect().width;
    if (referenceWidth && this.target) {
      this.renderer.setStyle(this.target, 'width', `${referenceWidth}px`);
    }
    const placement = this.position as Popper.Placement;
    this.popper = new Popper(this.el.nativeElement, this.target, {...this.defaultConfig, placement});
  }

  ngOnDestroy(): void {
    if (this.popper) {
      this.popper.destroy();
    }
  }

}
