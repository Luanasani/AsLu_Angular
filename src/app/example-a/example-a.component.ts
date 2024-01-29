import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example-a',
  templateUrl: './example-a.component.html',
  
  styleUrls: ['./example-a.component.css']
})
export class ExampleAComponent implements OnInit {
  public title = 'Example A'
  constructor() { }

  ngOnInit() {
    this.title += 'Example-A'
  }

}
