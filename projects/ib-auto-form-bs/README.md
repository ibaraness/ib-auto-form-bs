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

```
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
```ignorelang
<lib-ib-dynamic-forms [controlGroups]="controlGroups"></lib-ib-dynamic-forms>
```

As you can see, we assigned 'controlGroups' property to IbAutoFormComponent 'controlGroups' input. ControlGroups is a list of instructions to create our form.
In your component template crate a public property called 'controlGroups' like that:

```ignorelang
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
If you will try to run your project on the browser, you should see a text input with 'First Name' label. <br />
So what is really going on? What is this structure we are using?<br/>

Lets split apart the different parts so we can understand better, from inside to outside:
```ignorelang
{
    id: 'firstname',
    title: 'First Name',
    type: 'textbox'
}   
```
The above code, as you can imaging, represents a control type, in our case a text input. You can read farther about other properties control can have like validation etc. 
This control, hypothetically, is part of a list of other controls that make up our form, so we stack them by order on our **controls** array like so:

```ignorelang
controls: [
    // First control
    { 
        id: 'firstname',
        title: 'First Name',
        type: 'textbox'
    },
    // Second control
    { 
        id: 'lastname',
        title: 'Last Name',
        type: 'textbox'
    }    
    ...
]   
```
Ok, maybe that part was pretty clear, but why do we have to put the controls list inside another object which is a part of another list? <br />
To answer that lets think of a case where we want to layout our form so that it has different distinct sections. A good example is a feature setup form, which we might have 2 parts , a basic settings and advanced settings. 
On those cases we would like to divide our form to two main sections (basic and advanced). We call each section like that a **ControlGroup**. A control group can have properties like title, className etc.
In our first example we've used a single controlGroup with no properties:

```ignorelang
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

As with controls, custom groups control component can be added instead of the proposed one. control groups can be omitted, so only the controls will be displayed, by setting 'useGroups' to false
 
```angular2html
<lib-ib-dynamic-forms [controlGroups]="controlGroups" [useGroups]="false"></lib-ib-dynamic-forms>
```
