import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';


@NgModule({
    declarations: [],
    providers: [],
    imports: [
        CommonModule,
        BrowserModule,
        FormsModule,
        AppRoutingModule
    ],
    exports: [
        CommonModule,
        BrowserModule,
        FormsModule,
        AppRoutingModule
    ]
})

export class SharedModule {}