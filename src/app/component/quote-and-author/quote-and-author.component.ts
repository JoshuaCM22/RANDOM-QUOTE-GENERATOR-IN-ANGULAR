import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-quote-and-author',
  templateUrl: './quote-and-author.component.html',
  styleUrls: ['./quote-and-author.component.css']
})
export class QuoteAndAuthorComponent implements OnChanges {
  @Input() randomColor: () => string;
  @Input() handleClick: () => void;
  @Input() quote: string;
  @Input() author: string;

  constructor() { }

  ngOnChanges(): void {
    const html = document.documentElement;
    let currentColor = this.randomColor();
    html.style.backgroundColor = currentColor;
    html.style.color = currentColor;
    
    var button = document.getElementById("newQuote");
    button.style.backgroundColor = currentColor;
  }
}