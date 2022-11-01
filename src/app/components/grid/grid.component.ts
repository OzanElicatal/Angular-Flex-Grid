import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {
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
