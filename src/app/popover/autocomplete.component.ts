import {Component, Input, OnChanges, SimpleChanges, ViewEncapsulation} from "@angular/core";

@Component({
  selector: 'app-autocomplete',
  template: `<input
          ibPopper
          [popoverBody]="popover"
          [position]="'bottom'"
          #inputElement
          [(ngModel)]="currentValue"
          class="form-control"
          autocomplete="off"
          (targetClick)="onChange(currentValue)"
          (input)="onChange(currentValue)"
  >
  <ng-template #popover>
      <div class="list-group shadow-sm">
          <button *ngFor="let item of currentItems"
                  type="button" class="list-group-item list-group-item-action "
                  (click)="selectWord(item)"
                  [innerHTML]="item.title"></button>
      </div>
  </ng-template>
  `,
  styles: [`
      .term {
          font-weight: bold;
      }
  `],
  encapsulation: ViewEncapsulation.None
})
export class AutocompleteComponent implements OnChanges {
  @Input() items: { title: string, value: any }[] = [];

  currentValue: string;

  currentItems: any[] = [];

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

  selectWord(term: any) {
    console.log(term.value);
    this.currentValue = term.value;
  }
}
