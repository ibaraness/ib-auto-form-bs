import {ControlAdaptersConfig, controlType} from "../models/ib-auto-form";
import {ControlAdapterCheckboxComponent} from "../components/controls/control-adapter-checkbox/control-adapter-checkbox.component";
import {ControlAdapterSelectComponent} from "../components/controls/control-adapter-select/control-adapter-select.component";
import {ControlAdapterRadioComponent} from "../components/controls/control-adapter-radio/control-adapter-radio.component";
import {ControlAdapterTextareaComponent} from "../components/controls/control-adapter-textarea/control-adapter-textarea.component";
import {ControlAdapterFileComponent} from "../components/controls/control-adpter-file/control-adapter-file.component";
import {ControlAdapterTextInputComponent} from "../components/controls/control-adapter-textinput/control-adapter-text-input.component";


export const dynamicControlAdapters: ControlAdaptersConfig = {
  [controlType.TEXT_INPUT]: ControlAdapterTextInputComponent,
  [controlType.CHECKBOX]: ControlAdapterCheckboxComponent,
  [controlType.SELECT]: ControlAdapterSelectComponent,
  [controlType.RADIO]: ControlAdapterRadioComponent,
  [controlType.TEXTAREA]: ControlAdapterTextareaComponent,
  [controlType.FILE]: ControlAdapterFileComponent
};
