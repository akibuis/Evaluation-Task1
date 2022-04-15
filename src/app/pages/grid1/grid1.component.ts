import { Component, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import { IgxGridComponent } from 'igniteui-angular';
import { athletesData } from '../../data/athletesData';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-grid1',
  templateUrl: './grid1.component.html',
  styleUrls: ['./grid1.component.scss']
})
export class Grid1Component implements OnInit {

  @ViewChild('grid1', { static: true }) public grid1: any = IgxGridComponent;
    public data: any = {};

    public ngOnInit(): void {
        this.data = athletesData;
    }

}
