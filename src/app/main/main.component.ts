import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  text: any = {
    'Weeks': '',
    'Days': ``, '': ``,
    'Minutes': ``, 'Seconds': ``,
    'MilliSeconds': 'MilliSeconds'
  };

  constructor() { }

  ngOnInit() {
  }
}
