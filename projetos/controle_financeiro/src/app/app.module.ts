import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardsComponent } from './componets/cards/cards.component';
import { TablesComponent } from './componets/tables/tables.component';
import { FormsModule } from '@angular/forms';
import { FiltersComponent } from './componets/filters/filters.component';

@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    TablesComponent,
    FiltersComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
