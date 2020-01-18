import {IBControlAdaptersConfig} from "../../../projects/ib-auto-form-bs/src/lib/models/ib-auto-form";
import {IBControlType} from "ib-auto-form-bs";
import {CustomVaInputComponent} from "./components/custom-va-input.component";


export const customDynamicControlAdapters: IBControlAdaptersConfig = {
  [IBControlType.TEXT_INPUT]: CustomVaInputComponent
};
