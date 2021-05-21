import { Component, OnInit } from '@angular/core';
import { Quote } from '../qoute';

@Component({
  selector: 'app-quote',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuoteComponent implements OnInit {

  quotes: Quote[] = [
  ];

  message: String = new Date().toDateString();

  toggleDetails(index) {
    console.log(index)
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }
  addNewQuote(quote) {
    let quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }
  completeQuote(isComplete, index) {
    if (isComplete) {
      this.quotes.splice(index, 1);
    }
  }

  gethigh() {
    return Math.max(...this.quotes.map(quote => quote.upvote))
  }

  deleteQuote(isComplete, index) {
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].quote}?`)

      if (toDelete) {
        this.quotes.splice(index, 1)
      }
    }
  }
  constructor() { }


  ngOnInit(): void {
  }

}
