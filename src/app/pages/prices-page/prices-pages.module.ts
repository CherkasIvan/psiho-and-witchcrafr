import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PricesPagesComponent } from './prices-pages.component';

@NgModule({
  declarations: [PricesPagesComponent],
  exports: [PricesPagesComponent],
  imports: [CommonModule],
})
export class PricesPagesModule {}
