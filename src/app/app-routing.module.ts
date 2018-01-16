import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { WriteComponent } from './write-group/write/write.component';
import { WriteCategoryComponent } from './write-group/write-category/write-category.component';
import { ReadComponent } from './read-group/read/read.component';
import { ReadCategoryComponent } from './read-group/read-category/read-category.component';
import { VerifyComponent } from './verify/verify.component';
import { FavouriteComponent } from './favourite/favourite.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { Dashboard2Component } from './dashboard2/dashboard2.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'write', component: WriteComponent },
  { path: 'write/:category', component: WriteCategoryComponent },
  { path: 'read', component: ReadComponent },
  { path: 'read/:category', component: ReadCategoryComponent },
  { path: 'verify', component: VerifyComponent },
  { path: 'favourite', component: FavouriteComponent },
  { path: 'login', component: LoginComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'dashboard2', component: Dashboard2Component },
  { path: 'userList', component: UserListComponent }
];

@NgModule({
    exports: [ RouterModule ],
    imports: [ RouterModule.forRoot(routes) ],
})
export class AppRoutingModule { }