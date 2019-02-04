import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { ComponentModule } from './../components/component.module';

@NgModule({
    imports: [
        BrowserModule,
        CommonModule,
        HttpModule,
        ComponentModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule {}
