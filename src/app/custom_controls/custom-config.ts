
import {TextInputComponent} from "./components/text-input.component";
import {IbAutoFormConfig} from "../../../projects/ib-auto-form-bs/src/lib/models/ib-auto-form";
import {controlType} from "ib-auto-form-bs";


export const customDynamicControlAdapters: IbAutoFormConfig = {
  [controlType.TEXT_INPUT]: TextInputComponent
};
