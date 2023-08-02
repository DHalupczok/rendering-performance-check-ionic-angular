import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import {HttpClientModule} from "@angular/common/http";
import {CatComponent} from "./cat/cat.component";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    HttpClientModule,
    NgOptimizedImage,

  ],
  declarations: [HomePage, CatComponent]
})
export class HomePageModule {}
