import { Component, Input } from '@angular/core';

@Component({
    selector: 'anitem',
    templateUrl: './item.component.html'
})
export class ItemComponent {
    @Input() item: any;
}