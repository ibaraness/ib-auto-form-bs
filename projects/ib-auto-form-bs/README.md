# IbAutoFormBs

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.2.0.

## description
This library basically let you create a dynamic form component using bootstrap from controls (Like registration etc.) <br/>
Currently as it is, it supports 4 types of form controls:
* Text input (text, password, email etc.)
* Select 
* Radio
* Checkbox

With that being said, it can support any type of control from any other package (Like Angular materials) using customization tools.
Forms are being created using a JavaScript Object or a JSON file which contains instructions for the form builder. Different forms for different users can be created on the fly.

## Simple usage
You can create a simple working form using **IbAutoFormComponent** like that: <br>
First import **IbAutoFormBsModule** to your main module:

```javascript
import {IbAutoFormBsModule} from 'ib-auto-form-bs';

@NgModule({
  ...
  imports: [
    IbAutoFormBsModule.forRoot(),
  ],
  ...
})
export class AppModule { }

``` 
Second, add **IbAutoFormComponent** to your component template:
```javascript
<lib-ib-dynamic-forms [controlGroups]="controlGroups"></lib-ib-dynamic-forms>
```

As you can see, we assigned 'controlGroups' property to IbAutoFormComponent 'controlGroups' input. ControlGroups is a list of instructions to create our form.
In your component template crate a public property called 'controlGroups' like that:

```javascript
controlGroups = [
    {
        controls: [
            {
                id: 'firstname',
                title: 'First Name',
                type: 'textbox'
            }   
        ]       
    }
]
```
If you will try to run your project on the browser, you should see a text input with 'First Name' label.
