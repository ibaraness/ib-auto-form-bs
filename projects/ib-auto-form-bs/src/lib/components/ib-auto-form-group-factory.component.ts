import {
  AfterContentInit,
  Component,
  ComponentFactoryResolver,
  Injector,
  TemplateRef,
  Type,
  ViewChild,
  ViewContainerRef
} from "@angular/core";
import {IbAutoFormGroup} from "../models/ib-auto-form";
import {IbAutoFormConfigService} from "../services/ib-auto-form-config.service";

@Component({
  selector: 'lib-auto-form-group-factory',
  template: `
      <ng-container *ngIf="!configService.customGroupComponent && group">
          <lib-auto-form-group [group]="group">
              <ng-container *ngTemplateOutlet="basicGroupTemp"></ng-container>
          </lib-auto-form-group>
      </ng-container>
      <ng-template #basicGroupTemp>
          <ng-content></ng-content>
      </ng-template>
  `
})
export class IbAutoFormGroupFactoryComponent extends IbAutoFormGroup implements AfterContentInit {
  @ViewChild('basicGroupTemp') basicGroupTemp: TemplateRef<any>;

  constructor(
    private injector: Injector,
    private viewContainerRef: ViewContainerRef,
    private componentFactory: ComponentFactoryResolver,
    public configService: IbAutoFormConfigService
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
    if (!this.configService.customGroupComponent) {
      return;
    }
    setTimeout(() => {
      const factory = this.componentFactory.resolveComponentFactory(this.configService.customGroupComponent as Type<IbAutoFormGroup>);
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
