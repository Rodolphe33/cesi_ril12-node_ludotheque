import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GameUploadComponent } from './game-upload/game-upload.component';
import { GameListComponent } from './game-list/game-list.component';

const routes: Routes = [
  { path: '', component: GameListComponent },
  { path: 'upload', component: GameUploadComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
