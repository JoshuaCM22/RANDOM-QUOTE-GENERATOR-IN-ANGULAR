import { Component } from '@angular/core';
import { QuotesDatabase } from "./QuotesDatabase";
import { State } from "./models/State";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private quotesDatabase: QuotesDatabase) {
  }

  state: State = {
    quote: this.quotesDatabase.quotes[0].quote,
    author: this.quotesDatabase.quotes[0].author
  };

  handleClick = () => {
    const generateRandomQuote = this.randomQuote();
    this.state.quote = generateRandomQuote.quote;
    this.state.author = generateRandomQuote.author;
    this.shuffleQuotes(this.quotesDatabase.quotes);
  };

  randomQuote = () => {
    const randomNumber = Math.floor(Math.random() * this.quotesDatabase.quotes.length);
    return this.quotesDatabase.quotes[randomNumber];
  }

  shuffleQuotes = (array) => {
    return array.sort(() => Math.random() - 0.5);
  }

  randomColor = () => {
    const color = `rgb(
      ${Math.floor(Math.random() * 155)},
      ${Math.floor(Math.random() * 155)},
      ${Math.floor(Math.random() * 155)})`;
    return color;
  }
}