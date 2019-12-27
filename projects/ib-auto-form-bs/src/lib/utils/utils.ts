import { IbAutoFormControlGroup, DynamicControlOptions } from "../models/ib-auto-form";

export const getContrtolsFromGroups = (controlGroups: IbAutoFormControlGroup[]): DynamicControlOptions[] => {
  let controls: DynamicControlOptions[] = [];
  controlGroups.forEach(controlGroup => {
    controls = controls.concat(controlGroup.controls || []);
    controls = controls.concat(controlGroup.groups && getContrtolsFromGroups(controlGroup.groups) || []);
  });
  return controls;
};
