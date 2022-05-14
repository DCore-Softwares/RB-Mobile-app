import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const homeModule = () => import('../home/home.module').then(m => m.HomePageModule)
const scheduleModule = () => import('../schedule/schedule.module').then(m => m.SchedulePageModule)
const wikiModule = () => import('../wiki-batle/wiki-batle.module').then(m => m.WikiBatlePageModule)

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'schedule',
        loadChildren: scheduleModule
      },
      {
        path: 'home',
        loadChildren: homeModule
      },
      {
        path: 'wiki',
        loadChildren: wikiModule
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
