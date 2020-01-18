import { IBAutoFormControlGroup } from "../models/ib-auto-form";
import { getContrtolsFromGroups } from "./utils";

describe("Utils: getContrtolsFromGroups", () => {
  let controlGroups: IBAutoFormControlGroup[];

  beforeEach(() => {
    controlGroups = [
      {
        controls: [
          {
            id: "1",
            type: "any"
          },
          {
            id: "2",
            type: "any"
          },
          {
            id: "3",
            type: "any"
          }
        ],
        groups: [
          {
            controls: [
              {
                id: "4",
                type: "any"
              },
              {
                id: "5",
                type: "any"
              }
            ],
            groups: [
              {
                controls: [
                  {
                    id: "7",
                    type: "any"
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        controls: [
          {
            id: "6",
            type: "any"
          }
        ]
      }
    ];
  });

  it("should return controls from all group and group decendants", () => {
    expect(getContrtolsFromGroups(controlGroups).length).toBe(7);
  });
});
