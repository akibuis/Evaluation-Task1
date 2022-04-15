import { Component, OnInit, ViewChild } from '@angular/core';
import { DefaultSortingStrategy, IgxGridComponent, IgxSelectComponent, SortingDirection } from 'igniteui-angular';
import { DATA } from '../../data/localData';

enum TYPE {
  SINGLE = 'single',
  MULTI = 'multiple'
}

@Component({
  selector: 'app-grid2',
  templateUrl: './grid2.component.html',
  styleUrls: ['./grid2.component.scss']
})
export class Grid2Component implements OnInit {
  @ViewChild('grid1', { read: IgxGridComponent, static: true })
  public grid1: any = IgxGridComponent;

  @ViewChild(IgxSelectComponent)
  public igxSelect: any = IgxSelectComponent;

  public data: any = {};
  public sortingTypes = [{ name: 'Multiple Sort', value: TYPE.MULTI }, { name: 'Single Sort', value: TYPE.SINGLE }];
  public currentSortingType: TYPE = TYPE.SINGLE;

  constructor() {
  }
  public ngOnInit(): void {
      this.data = DATA;
      this.grid1.sortingExpressions = [
          {
              dir: SortingDirection.Asc, fieldName: 'CategoryName',
              ignoreCase: true, strategy: DefaultSortingStrategy.instance()
          }
      ];
  }

  public formatDate(val: Date) {
      return new Intl.DateTimeFormat('en-US').format(val);
  }

  public removeSorting($event: any) {
      if (this.currentSortingType === TYPE.SINGLE) {
          this.grid1.columns.forEach((col:any) => {
              if (!(col.field === $event.fieldName)) {
                  this.grid1.clearSort(col.field);
              }
          });
      }
  }

  public sortTypeSelection(event:any) {
          this.grid1.clearSort();
  }
}
