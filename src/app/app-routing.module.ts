import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewquoteComponent } from './newquote/newquote.component';
import { QuotesComponent } from './quotes/quotes.component';

const routes: Routes = [
  {
    path: "quotes",
    component: QuotesComponent
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
export const routingComponents =[QuotesComponent, NewquoteComponent];
