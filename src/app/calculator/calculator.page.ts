import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.page.html',
  styleUrls: ['./calculator.page.scss'],
})
export class CalculatorPage implements OnInit {
  value = ''
  oldValue = ''
  lastOperator = ''
  result = 0
  symbols = [
    [7, 8, 9, '/'], 
    [4, 5, 6, 'x'], 
    [1, 2, 3, '-'], 
    [0, 'C', '+', '=']
  ]

  constructor() { }

  ngOnInit() {
  }

  onNumButtonClicked(symbol) {
    
    this.value = this.value + symbol;

  }

}
