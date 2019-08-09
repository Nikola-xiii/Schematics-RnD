import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { <%= classify(name) %> } from './<%= dasherize(name) %>-api.service.ts';

@NgModule({
  declarations: [],
  providers: [<%= classify(name) %>ApiService],
  imports: [
    CommonModule
  ]
})
export class <%= classify(name) %>ApiModule { }
