import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-example-a',
  templateUrl: './example-a.component.html',
  
  styleUrls: ['./example-a.component.css']
})
export class ExampleAComponent implements OnInit {
  @Input() public headline = '';
  public title = 'Example A'
  constructor() { }

  ngOnInit() {
    this.title += 'Example-A'
  }

}
