import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ControlAdapterTextInputComponent} from "../../components/controls/control-text-input/control-adapter-text-input/control-adapter-text-input.component";
import {IbAutoFormValidationService} from "../../services/ib-auto-form-validation.service";
import {IbAutoFormBsModule} from "../../ib-auto-form-bs.module";

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, FormsModule, IbAutoFormBsModule],
  entryComponents: [ControlAdapterTextInputComponent],
  providers: [IbAutoFormValidationService]
})
export class TestModule {
}
