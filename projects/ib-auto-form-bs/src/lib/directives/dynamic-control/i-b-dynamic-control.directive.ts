import {ComponentFactoryResolver, Directive, Input, OnDestroy, OnInit, Type, ViewContainerRef} from "@angular/core";
import {FormGroup} from "@angular/forms";

import {IBDynamicControlOptions, IBAutoFormControlAdapter, IBFormGeneralConfig} from "../../models/ib-auto-form";
import {BehaviorSubject, Subscription} from "rxjs";
import {IBAutoFormConfigService} from "../../services/i-b-auto-form-config.service";
import {dynamicControlAdapters} from "../../config/dynamic-control-adapters.config";

@Directive({
  selector: "[ibDynamicControl]"
})
export class IBDynamicControlDirective implements OnInit, OnDestroy {
  /**
   * The form's main FormGroup instance
   */
  @Input() form: FormGroup;

  /**
   * Form control metadata.
   */
  @Input() control: IBDynamicControlOptions;

  /**
   * Listen to submit action (Will trigger validation check)
   */
  @Input() submit$: BehaviorSubject<boolean>;

  /**
   * Specific form config setting
   */
  @Input() config: IBFormGeneralConfig;
  private instance: IBAutoFormControlAdapter;
  private controlsConfig;
  private submitSubscription: Subscription;

  constructor(
    private viewContainer: ViewContainerRef,
    private componentFactoryResolver: ComponentFactoryResolver,
    private configService: IBAutoFormConfigService
  ) {
  }

  ngOnInit(): void {
    this.setControlAdapterConfig();

    this.createControl();
    this.submitSubscription = this.submit$.subscribe(isSubmit => {
      if (isSubmit && this.instance) {
        this.instance.validate();
      }
    });
  }

  /**
   * Create an control component from the control metadata
   */
  protected createControl() {
    if (!this.viewContainer || !this.control || !this.controlsConfig || !this.controlsConfig[this.control.type]) {
      return;
    }
    this.viewContainer.clear();
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
      this.controlsConfig[this.control.type] as Type<IBAutoFormControlAdapter>
    );
    const componentRef = this.viewContainer.createComponent(componentFactory);
    componentRef.instance.control = this.control;
    componentRef.instance.form = this.form;
    this.instance = componentRef.instance;
  }

  ngOnDestroy(): void {
    if (this.submitSubscription) {
      this.submitSubscription.unsubscribe();
    }
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
