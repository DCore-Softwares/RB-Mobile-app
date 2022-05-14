import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WikiBatlePage } from './wiki-batle.page';

const routes: Routes = [
  {
    path: '',
    component: WikiBatlePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WikiBatlePageRoutingModule {}
