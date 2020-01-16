import {IbAutoFormComponent, IbAutoFormConfigService, IbAutoFormControlGroup, IbFormGeneralConfig} from "ib-auto-form-bs";
import {Component, OnInit, ViewChild} from "@angular/core";
import {CustomGroupComponent} from "./custom_controls/components/custom-group.component";
import {customDynamicControlAdapters} from "./custom_controls/custom-config";


@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {

  @ViewChild("dynamicForms", {static: true}) dynamicForms: IbAutoFormComponent;

  public controlGroups: IbAutoFormControlGroup[] = [
    {
      title: 'Personal Details',
      className: 'personal-details-section',
      controls: [
        {
          id: "first_name",
          title: "First Name",
          defaultValue: "John",
          placeholder: "Please enter your first name",
          type: "text",
          validations: [
            {
              validation: "required",
              errorMessage: "This field is required"
            },
            {
              validation: "minlength-2",
              errorMessage: "You must enter at least 3 letters"
            },
            {
              validation: "only_letters",
              errorMessage: "you must use only letters, spaces and other characters are not alowed"
            }
          ]
        },
        {
          id: "last_name",
          title: "Last Name",
          placeholder: "Please enter your last name",
          type: "text"
        },
        {
          id: "email",
          title: "Email",
          type: "text",
          options: {
            input_type: "email"
          },
          validations: [
            {
              validation: "required",
              errorMessage: "This field is required"
            },
            {
              validation: "email",
              errorMessage: "Please enter a valid email address"
            }
          ]
        },
        {
          id: 'date',
          type: 'datepicker',
          title: 'Birthday',
        },
        {
          id: "password",
          title: "Password",
          type: "text",
          options: {
            input_type: "password"
          },
          validations: [
            {
              validation: "required",
              errorMessage: "This field is required"
            },
            {
              validation: "password",
              errorMessage: "Password must contain at least 1 lowercase letter, 1 uppercase letter, 1 digit, and 1 special character"
            },
            {
              validation: "minlength-6",
              errorMessage: "Password must be at least 6 characters long"
            }
          ]
        },
        {
          id: "terms",
          title: "I agree to the Terms & Conditions",
          type: "checkbox",
          validations: [
            {
              validation: "requiredTrue",
              errorMessage: "You must agree to our terms"
            }
          ]
        },
        {
          id: "select",
          title: "Select plan",
          type: "select",
          placeholder: "Please select a plan",
          validations: [
            {
              validation: "required",
              errorMessage: "This field is required"
            }
          ],
          multipleSelect: true,
          items: [
            {
              key: "10$",
              title: "First plan"
            },
            {
              key: "20$",
              title: "Second plan"
            },
            {
              key: "30$",
              title: "Third plan"
            }
          ]
        },
        {
          id: 'message',
          type: 'textarea',
          title: 'Message',
          rows: 5,
          defaultValue: 'Text123'
        },
      ]
    },
    {
      title: 'Other Details',
      controls: [
        {
          id: 'group2-input',
          type: 'text',
          title: 'Group2 Input',
          defaultValue: 'Text123'
        },
        {
          id: 'group2-input2',
          type: 'text',
          title: 'Group2 Input2',
        },
        {
          id: 'cbox',
          type: 'checkbox',
          title: 'Required checkbox',
          validations: [
            {
              validation: "required",
              errorMessage: "This field is required"
            },
            {
              validation: "requiredTrue",
              errorMessage: "You must check to continue"
            }
          ],
        },
        {
          id: 'file',
          type: 'file',
          title: 'Please upload a text file',
        }
      ]
    }
  ];

  specificConfig: IbFormGeneralConfig = {
    customGroupComponent: CustomGroupComponent,
  };

  specificConfig2: IbFormGeneralConfig = {
    controlAdaptersConfig: customDynamicControlAdapters
  };

  constructor(private configService: IbAutoFormConfigService) {
    // this.configService.controlAdaptersConfig = customDynamicControlAdapters;
    // this.configService.customGroupComponent = CustomGroupComponent;
  }

  ngOnInit(): void {

  }

  submit() {
    if (this.dynamicForms) {
      const a = this.dynamicForms.getFormData();
      console.log("submiting", a, this.dynamicForms.form);
      return;
    }
  }
}
