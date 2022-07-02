import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component'
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { UserlistComponent } from './userlist/userlisy.component';
import { ProfileGaurd } from './gaurds/profilegaurd.service';
import { UserGaurd } from './gaurds/usergaurd.service';

const routes: Routes = [
  {path:'users',canActivate:[UserGaurd],component:UserlistComponent},
  {path:'profile',canActivate:[ProfileGaurd], component:ProfileComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'',component:RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [ProfileGaurd,UserGaurd],
  exports: [RouterModule]
})
export class AppRoutingModule { }
