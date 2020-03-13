import {Component, OnChanges, OnInit, SimpleChanges, ViewChild, ViewEncapsulation} from "@angular/core";
import {BasicControlAdapterComponent} from "../basic-control-adapter.component";
import {IBControlSimpleItem} from "../../../models/ib-auto-form";

@Component({
  selector: 'ib-control-adapter-autocomplete',
  template: `
      <div *ngIf="form"
           [formGroup]="form"
           [ngClass]="control.className"
           class="form-group">
          <label [for]="now+control.id" [ngClass]="{'required': required}">{{control.title}}</label>
          <div [formControlName]="control.id" [(ibCustomValueAccessor)]="currentValue">
              <input
                      ibPopper
                      [popoverBody]="popover"
                      [position]="'bottom'"
                      [value]="currentValue"
                      #inputElement
                      class="form-control"
                      autocomplete="off"
                      (targetClick)="onChange(currentValue)"
                      (input)="onChange($event.target.value)"
                      (keydown.arrowDown)="focusOnList($event)"
              >
          </div>
          <ng-template #popover>
              <div class="list-group shadow-sm" [id]="autocompleteID">
                  <button *ngFor="let item of currentItems"
                          type="button" class="autocomplete-item list-group-item list-group-item-action "
                          (click)="selectWord(item)"
                          tabindex="0"
                          (keydown.arrowDown)="focusNext($event)"
                          (keydown.arrowUp)="focusNext($event, true)"
                          [innerHTML]="item.title"></button>
              </div>
          </ng-template>
      </div>

  `,
  encapsulation: ViewEncapsulation.None
})
export class ControlAdapterAutocompleteComponent extends BasicControlAdapterComponent implements OnChanges, OnInit {
  @ViewChild('inputElement', {static: false}) inputElement: HTMLInputElement;
  items: IBControlSimpleItem[] = [];

  currentValue: string;

  currentItems: any[] = [];

  autocompleteID = `autocomplete_list_${+new Date()}`;

  ngOnInit(): void {
    super.ngOnInit();
    this.items = this.control.items;
  }

  onChange(value: string) {
    this.currentValue = value;
    this.currentItems = [];

    if (!value || !this.items) {
      return;
    }

    this.items.forEach((item) => {
      const termPos = item.title.toLowerCase().indexOf(value.toLowerCase());
      if (termPos > -1) {
        const title = this.getItemWithEmphasizedTerm(item.title, value);
        this.currentItems.push({...item, title});
      }
    });
  }

  focusOnList(event: KeyboardEvent) {
    event.preventDefault();
    const autocompleteList: HTMLButtonElement = document.querySelector(`#${this.autocompleteID} .autocomplete-item`);
    autocompleteList.focus();
  }

  focusNext(event: KeyboardEvent, previous: boolean = false) {
    event.preventDefault();
    const currentItem: HTMLButtonElement = event.target as HTMLButtonElement;
    let targetedElement = !previous ? currentItem.nextElementSibling : currentItem.previousElementSibling;
    targetedElement = targetedElement || (
      !previous ? currentItem.parentElement.firstElementChild
        : currentItem.parentElement.lastElementChild
    );
    (targetedElement as HTMLButtonElement).focus();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.items && this.currentValue) {
      this.onChange(this.currentValue);
    }
  }

  getItemWithEmphasizedTerm(title: string, term: string): string {
    const emphasizedTerm = `<span class="term">${term}</span>`;
    const words = title.split(new RegExp(term, 'ig'));
    return words.join(emphasizedTerm);
  }

  selectWord(term: IBControlSimpleItem) {
    console.log(term.key);
    this.currentValue = '' + term.key;
    this.inputElement.value = this.currentValue;
  }
}
