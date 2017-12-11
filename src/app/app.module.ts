import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { HttpModule } from '@angular/http';
//router
import { AppRoutingModule } from './app-routing.module';
//services
import { CategoriesService } from './services/categories.service';
import { HeadingService } from './services/heading.service';
import { ArticlesService } from './services/articles.service';
import { UserService } from './services/user.service';
import { HttpService } from './services/http.service';
import { DashboardService } from './services/dashboard.service';
//components
import { AppComponent } from './app.component';
import { CategoriesComponent } from './categories/categories.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { WriteComponent } from './write-group/write/write.component';
import { WriteCategoryComponent } from './write-group/write-category/write-category.component';
import { ReadComponent } from './read-group/read/read.component';
import { ReadCategoryComponent } from './read-group/read-category/read-category.component';
import { VerifyComponent } from './verify/verify.component';
import { FavouriteComponent } from './favourite/favourite.component';
import { TopMenuComponent }  from './top-menu/top-menu.component';
import { HeadingDescriptionComponent } from './heading-description/heading-description.component';
import { WriteArticleComponent } from './forms/write-article/write-article.component';
import { FileUploadButtonDirective } from './directives/file-upload-button/file-upload-button.directive';
import { FileUploadButtonComponent } from './helpers/file-upload-button/file-upload-button.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    TopMenuComponent,
    WriteComponent,
    HeadingDescriptionComponent,
    DashboardComponent,
    ReadComponent,
    VerifyComponent,
    FavouriteComponent,
    CategoriesComponent,
    WriteCategoryComponent,
    ReadCategoryComponent,
    WriteArticleComponent,
    FileUploadButtonDirective,
    FileUploadButtonComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpModule
  ],
  providers: [
    CategoriesService,
    ArticlesService,
    HeadingService,
    UserService,
    HttpService,
    DashboardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
