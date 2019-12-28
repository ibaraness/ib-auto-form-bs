import {TextInputComponent} from "./components/text-input.component";
import {ControlAdaptersConfig} from "../../../projects/ib-auto-form-bs/src/lib/models/ib-auto-form";
import {controlType} from "ib-auto-form-bs";


export const customDynamicControlAdapters: ControlAdaptersConfig = {
  [controlType.TEXT_INPUT]: TextInputComponent
};
