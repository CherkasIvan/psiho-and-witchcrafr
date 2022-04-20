import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutAuthorComponent } from './about-author.component';

@NgModule({
  declarations: [AboutAuthorComponent],
  exports: [AboutAuthorComponent],
  imports: [CommonModule],
})
export class AboutAuthorModule {}
