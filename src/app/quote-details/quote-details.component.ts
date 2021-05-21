import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Quote } from '../qoute';

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {
  @Input() quotes: Quote;
  @Output() isComplete = new EventEmitter<boolean>();


  deleteQuote(complete: boolean) {
    this.isComplete.emit(complete);
  }

  //The code below increaments the upvote
  upvote() {
    this.quotes.upvote += 1;
  }

  downvote() {
    this.quotes.downvote += 1;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
