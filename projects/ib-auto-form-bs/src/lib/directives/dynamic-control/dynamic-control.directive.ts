import {ComponentFactoryResolver, Directive, Input, OnInit, Type, ViewContainerRef} from "@angular/core";
import {FormGroup} from "@angular/forms";

import {DynamicControlOptions, IbAutoFormControlAdapter, IbFormGeneralConfig} from "../../models/ib-auto-form";
import {BehaviorSubject} from "rxjs";
import {IbAutoFormConfigService} from "../../services/ib-auto-form-config.service";
import {dynamicControlAdapters} from "../../config/dynamic-control-adapters.config";

@Directive({
  selector: "[libIBDynamicControl]"
})
export class DynamicControlDirective implements OnInit {
  @Input() form: FormGroup;
  @Input() control: DynamicControlOptions;
  @Input() submit$: BehaviorSubject<boolean>;
  @Input() config: IbFormGeneralConfig;
  private instance: IbAutoFormControlAdapter;
  private controlsConfig;

  constructor(
    private viewContainer: ViewContainerRef,
    private componentFactoryResolver: ComponentFactoryResolver,
    private configService: IbAutoFormConfigService
  ) {
  }

  ngOnInit(): void {
    this.setControlAdapterConfig();

    this.createControl();
    this.submit$.subscribe(isSubmit => {
      if (isSubmit && this.instance) {
        this.instance.validate();
      }
    });
  }

  createControl() {
    if (!this.viewContainer || !this.control || !this.controlsConfig || !this.controlsConfig[this.control.type]) {
      return;
    }
    this.viewContainer.clear();
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
      this.controlsConfig[this.control.type] as Type<IbAutoFormControlAdapter>
    );
    const componentRef = this.viewContainer.createComponent(componentFactory);
    componentRef.instance.control = this.control;
    componentRef.instance.form = this.form;
    this.instance = componentRef.instance;
  }

  private setControlAdapterConfig() {
    if (this.config && this.config.controlAdaptersConfig) {
      this.controlsConfig = {
        ...(this.config.extendExistingControls && {...dynamicControlAdapters}),
        ...this.config.controlAdaptersConfig
      };
      return;
    }
    this.controlsConfig = {
      ...(this.configService.extendExistingControls && {...dynamicControlAdapters}),
      ...this.configService.controlAdaptersConfig
    };
  }
}
