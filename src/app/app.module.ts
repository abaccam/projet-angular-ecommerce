import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ListeProduitComponent } from './liste-produit/liste-produit.component';
import { PanierComponent } from './panier/panier.component';
import { PageProduitComponent } from './page-produit/page-produit.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ListeProduitComponent,
    PanierComponent,
    PageProduitComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
