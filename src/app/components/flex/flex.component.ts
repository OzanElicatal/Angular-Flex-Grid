import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flex',
  templateUrl: './flex.component.html',
  styleUrls: ['./flex.component.css']
})
export class FlexComponent implements OnInit {
  selectedColor= "white";
  inputValue = false;
  constructor() { }

  ngOnInit(): void {
  }

  public colorTitle= [
    { 
      color: 'red'},
    {color: 'orange'},
    {color: 'purple'},
    {color: 'cornflowerblue'},
    {color: 'brown'},
    {color: 'green'},
    {color: 'gray'},
    {color: 'darkgrey'},
    {color: 'aqua'},
    {color: 'wheat'},
    {color: 'silver'}

  ]

}
