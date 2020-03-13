import {Component} from "@angular/core";

@Component({
  selector: 'app-popper',
  template: `
<!--      <ng-container [appPopper]="target" [target]="tooltip"></ng-container>-->
<!--      <button #target>This is a long button but it's worth your hovering</button>-->
      
      <p class="m-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Maecenas molestie ac quam tincidunt vehicula. Aliquam erat volutpat. 
          Cras ultricies sed nisi a lobortis. Aliquam ut sollicitudin ipsum. Morbi orci magna, consectetur ac sem eget, 
          euismod venenatis neque. Etiam ultricies nibh sit amet arcu rhoncus dictum. Praesent pulvinar, risus eget aliquet 
          bibendum, justo libero tincidunt urna, eget eleifend urna felis vitae diam. Praesent iaculis tristique nunc, congue 
          bibendum odio faucibus sed. Proin eu massa placerat, pulvinar erat id, pulvinar ante. Orci varius natoque penatibus 
          et magnis dis parturient montes, nascetur ridiculus mus. Sed lobortis quis purus non rhoncus. Pellentesque ultricies 
          bibendum nunc in ullamcorper. Donec ut lorem ac elit porttitor mattis. Etiam suscipit nisl in tempus euismod.</p>
      <p class="m-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Maecenas molestie ac quam tincidunt vehicula. Aliquam erat volutpat.
          Cras ultricies sed nisi a lobortis. Aliquam ut sollicitudin ipsum. Morbi orci magna, consectetur ac sem eget,
          euismod venenatis neque. Etiam ultricies nibh sit amet arcu rhoncus dictum. Praesent pulvinar, risus eget aliquet
          bibendum, justo libero tincidunt urna, eget eleifend urna felis vitae diam. Praesent iaculis tristique nunc, congue
          bibendum odio faucibus sed. Proin eu massa placerat, pulvinar erat id, pulvinar ante. Orci varius natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Sed lobortis quis purus non rhoncus. Pellentesque ultricies
          bibendum nunc in ullamcorper. Donec ut lorem ac elit porttitor mattis. Etiam suscipit nisl in tempus euismod.</p>

<div class="row">
    <div class="col-1"></div>
    <div class="col-3">
        <div class="form-group">

            <label for="autocomplete">Autocomplete</label>
            <input
                    class="form-control"
                    id="autocomplete"
                    autocomplete="off"
            >
        </div>
    </div>
</div>

<!--      <input class="m-2" type="text" appPopper [target]="tooltip" [placement]="'bottom'">-->

      <div class="list-group shadow-sm" #tooltip>
          <button type="button" class="list-group-item list-group-item-action ">Cras justo odio</button>
          <button type="button" class="list-group-item list-group-item-action">Dapibus ac facilisis in</button>
          <button type="button" class="list-group-item list-group-item-action">Morbi leo risus</button>
          <button type="button" class="list-group-item list-group-item-action">Porta ac consectetur ac</button>
          <button type="button" class="list-group-item list-group-item-action">Vestibulum at eros</button>
      </div>

<!--      <div class="popover m-2" role="tooltip">-->
<!--          <div class="arrow"></div>-->
<!--          <div class="popover-body">-->
<!--              <div class="list-group">-->
<!--                  <button type="button" class="list-group-item list-group-item-action active">-->
<!--                      Cras justo odio-->
<!--                  </button>-->
<!--                  <button type="button" class="list-group-item list-group-item-action">Dapibus ac facilisis in</button>-->
<!--                  <button type="button" class="list-group-item list-group-item-action">Morbi leo risus</button>-->
<!--                  <button type="button" class="list-group-item list-group-item-action">Porta ac consectetur ac</button>-->
<!--                  <button type="button" class="list-group-item list-group-item-action" disabled>Vestibulum at eros</button>-->
<!--              </div>-->
<!--          </div>-->
<!--      </div>-->
  `
})
export class PopperComponent {

}
