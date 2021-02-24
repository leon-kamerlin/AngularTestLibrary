import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'leon-mylibrary',
  template: `
    <p>
      mylibrary works!
    </p>
  `,
  styles: [
  ]
})
export class MylibraryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log(_.random(1, 100));
  }

}
