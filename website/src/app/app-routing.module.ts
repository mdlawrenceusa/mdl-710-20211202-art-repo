import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtComponent } from './art/art.component';
import { WelcomeComponent } from './welcome/welcome.component';


const routes: Routes = [
  
  { path: '', component: WelcomeComponent },
  { path: 'art', component: ArtComponent },

  
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
