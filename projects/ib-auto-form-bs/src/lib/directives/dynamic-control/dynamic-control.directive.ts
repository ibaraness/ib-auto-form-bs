import {
  ComponentFactoryResolver,
  Directive,
  Input,
  Type,
  ViewContainerRef,
  OnInit
} from "@angular/core";
import { FormGroup } from "@angular/forms";

import {DynamicControlOptions, IbAutoFormControlAdapter} from "../../models/ib-auto-form";
import { BehaviorSubject } from "rxjs";
import {IbAutoFormConfigService} from "../../services/ib-auto-form-config.service";

@Directive({
  selector: "[libIBDynamicControl]"
})
export class DynamicControlDirective implements OnInit {
  @Input() form: FormGroup;
  @Input() control: DynamicControlOptions;
  @Input() submit$: BehaviorSubject<boolean>;
  private instance: IbAutoFormControlAdapter;
  private config;

  constructor(
    private viewContainer: ViewContainerRef,
    private componentFactoryResolver: ComponentFactoryResolver,
    private configService: IbAutoFormConfigService
  ) { }

  ngOnInit(): void {

    this.config = this.configService.config;

    this.createControl();
    this.submit$.subscribe(isSubmit => {
      if (isSubmit && this.instance) {
        this.instance.validate();
      }
    });
  }

  createControl() {
    if (!this.viewContainer || !this.control || !this.config || !this.config[this.control.type]) {
      return;
    }
    this.viewContainer.clear();
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
      this.config[this.control.type] as Type<
        IbAutoFormControlAdapter
      >
    );
    const componentRef = this.viewContainer.createComponent(componentFactory);
    componentRef.instance.control = this.control;
    componentRef.instance.form = this.form;
    this.instance = componentRef.instance;
  }
}
