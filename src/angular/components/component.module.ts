import { NgModule } from '@angular/core';
import { ItemComponent } from './item/item.component';

@NgModule({
    declarations: [ItemComponent],
    exports: [ItemComponent]
})
export class ComponentModule {}