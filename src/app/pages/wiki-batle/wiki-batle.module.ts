import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WikiBatlePageRoutingModule } from './wiki-batle-routing.module';

import { WikiBatlePage } from './wiki-batle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WikiBatlePageRoutingModule
  ],
  declarations: [WikiBatlePage]
})
export class WikiBatlePageModule {}
