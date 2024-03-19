import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseComponent } from './base/base.component';

const routes: Routes = [

  {path: '',
   component: BaseComponent,
   children: [
    {
      path: 'search',
      loadChildren: () => import('../search/search.module').then(m => m.SearchModule)
    },
    {
      path: 'result-detail',
      loadChildren: () => import('../result-detail/result-detail.module').then(m => m.ResultDetailModule)
    }

   ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
