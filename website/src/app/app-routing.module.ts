import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LestonComponent } from './leston/leston.component';

const routes: Routes = [
  { path: '', component: HomeComponent , data: { animation: 'isLeft' },},
  { path: 'leston', component: LestonComponent, data: { animation: 'isRight' },},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
