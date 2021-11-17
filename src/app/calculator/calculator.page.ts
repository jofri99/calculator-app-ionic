import { Component, OnInit } from '@angular/core'
import { IonicToastService } from '../services/ionic-toast.service';
@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.page.html',
  styleUrls: ['./calculator.page.scss'],
})

export class CalculatorPage implements OnInit {
  value = ''
  symbols = [
    [7, 8, 9, '/'], 
    [4, 5, 6, 'x'], 
    [1, 2, 3, '-'], 
    [0, 'C', '=' , '+']
  ]

  constructor(private ionicToastService: IonicToastService) {}

  ngOnInit() {
  }

  /** evaluate result and write result to the text input */
  updateResult() {
    var res = eval(this.value)
    if(res !== Infinity) {
      this.value = res.toString();
    } else {
      this.ionicToastService.showToast('No valid calculation!')
    }
  }

  /** Checks if there are no numeric characters in the input */
  characterValidation(e: any) {
    var allowedSymbols = /([0-9\+\/\-\*])/g
    if(!e.detail.value.slice(-1).match(allowedSymbols)) {
      e.target.value = e.target.value.substring(0, this.value.length - 1)
    }
  }

  /** Handles button input from the calculator */
  onNumButtonClicked(symbol) {
    if(typeof symbol === 'number') {
      this.value = this.value + symbol;
    } else {
      if(symbol === '='){
        this.updateResult()
      }else if(symbol === 'C') {
        this.value = this.value.substring(0, this.value.length - 1)
      } else if(symbol === '+') {
        this.value = this.value + symbol;
      } else if(symbol === '-') {
        this.value = this.value + symbol;
      } else if(symbol === 'x') {
        this.value = this.value + '*';
      } else if(symbol === '/') {
        this.value = this.value + symbol;
      }
    }
  }

}
