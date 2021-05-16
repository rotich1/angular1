import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Quote } from '../qoute';


@Component({
  selector: 'app-newquote',
  templateUrl: './newquote.component.html',
  styleUrls: ['./newquote.component.css']
})
export class NewquoteComponent implements OnInit {

  newQuote = new Quote("", "", new Date(), 0, 0);
  @Output() addQuote = new EventEmitter<Quote>();

  submitQuote() {
    this.addQuote.emit(this.newQuote);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
