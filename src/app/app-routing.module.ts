import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewquoteComponent } from './newquote/newquote.component';
import { QuoteComponent } from './quotes/quotes.component';

const routes: Routes = [
  {
    path: "quotes",
    component: QuoteComponent
  },

  {
    path: "newquote",
    component: NewquoteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
