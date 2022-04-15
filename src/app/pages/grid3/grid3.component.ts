import { Component, OnInit, ViewChild } from '@angular/core';
import { IgxGridComponent } from 'igniteui-angular';
import { DATA } from '../../data/nwindData';

@Component({
  selector: 'app-grid3',
  templateUrl: './grid3.component.html',
  styleUrls: ['./grid3.component.scss']
})
export class Grid3Component implements OnInit {
  @ViewChild('grid1', { read: IgxGridComponent, static: true })
  public grid1: any = IgxGridComponent;

  public data: any = {};;

  constructor() {
  }
  public ngOnInit(): void {
      this.data = DATA;
  }

  public formatCurrency(val: string) {
      return '$' + parseInt(val, 10).toFixed(2);
  }
}