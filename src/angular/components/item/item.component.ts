import { Component, Input } from '@angular/core';

@Component({
    selector: 'Item',
    templateUrl: './item.component.html'
})
export class ItemComponent {
    @Input() item: any;
}