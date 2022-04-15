import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SimpleComponent } from './layouts/simple/simple.component';
import { Grid1Component } from './pages/grid1/grid1.component';
import { Grid2Component } from './pages/grid2/grid2.component';
import { Grid3Component } from './pages/grid3/grid3.component';
import { Grid4Component } from './pages/grid4/grid4.component';

const routes: Routes = [
  { path: "", redirectTo: "/grid1", pathMatch: "full" },
  { 
    path: "", component: SimpleComponent,
    children:[
      { path: "grid1", component: Grid1Component },
      { path: "grid2", component: Grid2Component },
      { path: "grid3", component: Grid3Component },
      { path: "grid4", component: Grid4Component },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
