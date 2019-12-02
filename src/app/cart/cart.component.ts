import { Component, OnInit, ViewChild } from '@angular/core';
import { AllCommunityModules } from "@ag-grid-community/all-modules"
import { AgGridAngular } from '@ag-grid-community/angular';
import { DataService } from '../services/data.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  @ViewChild('agGrid', { static: false }) agGrid: AgGridAngular;
  error: string;
  apiData: Observable<any>;
  total: any = 0;
  wallet: Number = 10000;
  columnDefs = [
    { headerName: 'stockName', field: 'stockName' },
    { headerName: 'stockPrice', field: 'stockPrice' },
    { headerName: 'quantity', field: 'quantity' },
    { headerName: 'cost', field: 'cost' }
  ];


  rowData: any;


  modules = AllCommunityModules;

  constructor(private dataservice: DataService, private router: Router) { }

  ngOnInit() {
    this.rowData = this.dataservice.selectedData;
    if (this.rowData)
      this.rowData.forEach(element => {
        element.cost = element.stockPrice * element.quantity;
        this.total = this.total + Number(element.cost);
      });



  }
  getSelectedRows() {
    this.router.navigate(['details'])
  }

}
