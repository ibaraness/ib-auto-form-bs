import {IBControlAdaptersConfig, IBControlType} from "../models/ib-auto-form";
import {ControlAdapterCheckboxComponent} from "../components/controls/control-adapter-checkbox/control-adapter-checkbox.component";
import {ControlAdapterSelectComponent} from "../components/controls/control-adapter-select/control-adapter-select.component";
import {ControlAdapterRadioComponent} from "../components/controls/control-adapter-radio/control-adapter-radio.component";
import {ControlAdapterTextareaComponent} from "../components/controls/control-adapter-textarea/control-adapter-textarea.component";
import {ControlAdapterFileComponent} from "../components/controls/control-adpter-file/control-adapter-file.component";
import {ControlAdapterTextInputComponent} from "../components/controls/control-adapter-textinput/control-adapter-text-input.component";
import {ControlAdapterDatepickerComponent} from "../components/controls/control-adapter-datepicker/control-adapter-datepicker.component";
import {ControlAdapterAutocompleteComponent} from "../components/controls/control-adapter-autocomplete/ControlAdapterAutocomplete.component";


export const dynamicControlAdapters: IBControlAdaptersConfig = {
  [IBControlType.TEXT_INPUT]: ControlAdapterTextInputComponent,
  [IBControlType.CHECKBOX]: ControlAdapterCheckboxComponent,
  [IBControlType.SELECT]: ControlAdapterSelectComponent,
  [IBControlType.RADIO]: ControlAdapterRadioComponent,
  [IBControlType.TEXTAREA]: ControlAdapterTextareaComponent,
  [IBControlType.FILE]: ControlAdapterFileComponent,
  [IBControlType.DATE_PICKER]: ControlAdapterDatepickerComponent,
  [IBControlType.AUTOCOMPLETE]: ControlAdapterAutocompleteComponent
};
