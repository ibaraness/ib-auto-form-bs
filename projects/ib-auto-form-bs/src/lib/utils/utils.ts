import { IBAutoFormControlGroup, IBDynamicControlOptions } from "../models/ib-auto-form";

export const getContrtolsFromGroups = (controlGroups: IBAutoFormControlGroup[]): IBDynamicControlOptions[] => {
  let controls: IBDynamicControlOptions[] = [];
  controlGroups.forEach(controlGroup => {
    controls = controls.concat(controlGroup.controls || []);
    controls = controls.concat(controlGroup.groups && getContrtolsFromGroups(controlGroup.groups) || []);
  });
  return controls;
};
