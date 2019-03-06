import { Component, OnInit } from '@angular/core';
import { CalculateService } from "../calculate.service";

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  constructor(private service: CalculateService ) { }
data;
  ngOnInit() {
    console.log(this.service.getData(5,10))
    this.data = this.service.getData(5,10)
  }

}
