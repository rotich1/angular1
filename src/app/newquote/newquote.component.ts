import { Component, OnInit, EventEmitter, Output} from '@angular/core';
// import { Quote } from '../quotes/quotes.component'

@Component({
  selector: 'app-quotes',
  templateUrl: './newquote.component.html',
  styleUrls: ['./newquote.component.css']
})
export class NewquoteComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
  } 
  newQuote = new Quote("", "");
  @Output() addQuote = new EventEmitter<Quote>();
  
  submitQuote() {
    this.addQuote.emit(this.newQuote);
  }

  quote: Quote[] = [
  ];

  addNewQuote(quote: any) {
    let quoteLength = this.quote.length;
    quote.id = quoteLength + 1;
    quote.completeDate = new Date(quote.completeDate)
    this.quote.push(quote)
  }
  
}


export class Quote {
  constructor(public author: string, public quote: string) {
    console.log("Constructor");
  }
}


// localStorage.setItem("Quotes", Quote)
