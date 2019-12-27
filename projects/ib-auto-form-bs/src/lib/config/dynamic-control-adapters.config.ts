  import {
  ControlAdapterTextInputComponent
} from "../components/controls/control-text-input/control-adapter-text-input/control-adapter-text-input.component";
  import {controlType, IbAutoFormConfig} from "../models/ib-auto-form";
  import {ControlAdapterCheckboxComponent} from "../components/controls/control-adapter-checkbox/control-adapter-checkbox.component";
  import {ControlAdapterSelectComponent} from "../components/controls/control-adapter-select/control-adapter-select.component";
  import {ControlAdapterRadioComponent} from "../components/controls/control-adapter-radio/control-adapter-radio.component";



export const dynamicControlAdapters: IbAutoFormConfig = {
  [controlType.TEXT_INPUT]: ControlAdapterTextInputComponent,
  [controlType.CHECKBOX]: ControlAdapterCheckboxComponent,
  [controlType.SELECT]: ControlAdapterSelectComponent,
  [controlType.RADIO]: ControlAdapterRadioComponent
};
