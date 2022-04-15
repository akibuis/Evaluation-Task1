import { Component, OnInit } from '@angular/core';
import { DATA } from '../../data/nwindData';

@Component({
  selector: 'app-grid4',
  templateUrl: './grid4.component.html',
  styleUrls: ['./grid4.component.scss']
})
export class Grid4Component implements OnInit {

  public data: any[] = DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
