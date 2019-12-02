import { Component, OnInit , ViewChild} from '@angular/core';
import { DataService } from '../services/data.service';
import { AllCommunityModules } from "@ag-grid-community/all-modules"
import { AgGridAngular } from '@ag-grid-community/angular';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  totalCost:any = 0;
  walletbalance:any = 10000;
  columnDefs = [
    { headerName: 'stockName', field: 'stockName'},
    { headerName: 'stockPrice', field: 'stockPrice' },
    { headerName: 'quantity', field: 'quantity' },
    { headerName: 'cost', field: 'cost' }
  ];

  rowData: any;

  modules = AllCommunityModules;

  constructor(private dataservice: DataService) { }

  ngOnInit() {
    this.rowData = this.dataservice.selectedData;
    this.rowData.forEach(element => {
           this.totalCost = this.totalCost + Number(element.cost);

    });
    this.walletbalance = this.walletbalance - this.totalCost;
  }
}
