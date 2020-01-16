import {ControlAdaptersConfig} from "../../../projects/ib-auto-form-bs/src/lib/models/ib-auto-form";
import {controlType} from "ib-auto-form-bs";
import {CustomVaInputComponent} from "./components/custom-va-input.component";


export const customDynamicControlAdapters: ControlAdaptersConfig = {
  [controlType.TEXT_INPUT]: CustomVaInputComponent
};
