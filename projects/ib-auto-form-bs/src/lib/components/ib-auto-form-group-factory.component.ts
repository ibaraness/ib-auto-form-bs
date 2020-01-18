import {
  AfterContentInit,
  Component,
  ComponentFactoryResolver,
  Injector,
  Input,
  TemplateRef,
  Type,
  ViewChild,
  ViewContainerRef
} from "@angular/core";
import {IBAutoFormGroup, IBFormGeneralConfig} from "../models/ib-auto-form";
import {IBAutoFormConfigService} from "../services/i-b-auto-form-config.service";

@Component({
  selector: 'ib-auto-form-group-factory',
  template: `
      <ng-container *ngIf="!customGroupComponent && group">
          <ib-auto-form-group [group]="group">
              <ng-container *ngTemplateOutlet="basicGroupTemp"></ng-container>
          </ib-auto-form-group>
      </ng-container>
      <ng-template #basicGroupTemp>
          <ng-content></ng-content>
      </ng-template>
  `
})
export class IbAutoFormGroupFactoryComponent extends IBAutoFormGroup implements AfterContentInit {
  @ViewChild('basicGroupTemp', { static: true }) basicGroupTemp: TemplateRef<any>;
  @Input() config: IBFormGeneralConfig;
  customGroupComponent: Type<IBAutoFormGroup>;

  constructor(
    private injector: Injector,
    private viewContainerRef: ViewContainerRef,
    private componentFactory: ComponentFactoryResolver,
    public configService: IBAutoFormConfigService
  ) {
    super();
  }

  static resolveNgContent<T>(content: TemplateRef<T>) {
    if (content instanceof TemplateRef) {
      const viewRef = content.createEmbeddedView(null);
      return [viewRef.rootNodes];
    }
  }

  ngAfterContentInit(): void {
    if (this.config && this.config.customGroupComponent) {
      this.customGroupComponent = this.config.customGroupComponent;
    } else if (this.configService && this.configService.customGroupComponent) {
      this.customGroupComponent = this.configService.customGroupComponent;
    } else {
      return;
    }
    setTimeout(() => {
      const factory = this.componentFactory.resolveComponentFactory(this.customGroupComponent);
      this.viewContainerRef.clear();
      const componentRef = this.viewContainerRef.createComponent(
        factory,
        0,
        this.injector, IbAutoFormGroupFactoryComponent.resolveNgContent(this.basicGroupTemp)
      );
      componentRef.instance.group = this.group;
    });
  }


}
