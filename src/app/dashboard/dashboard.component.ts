import { Component, OnInit, ViewChild } from '@angular/core';
import { AllCommunityModules } from "@ag-grid-community/all-modules"
import { HttpClient } from '@angular/common/http';
import { AgGridAngular } from '@ag-grid-community/angular';
import { Observable } from 'rxjs';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';
import { QuantityRendererComponent } from '../quantity-renderer/quantity-renderer.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  @ViewChild('agGrid',{static: false}) agGrid: AgGridAngular;
  error: string;
  apiData: Observable<any>;
  columnDefs = [
    { headerName: 'stockName', field: 'stockName', sortable: true, filter: true, checkboxSelection: true },
    { headerName: 'stockPrice', field: 'stockPrice' },
    { headerName: 'quantity', field: 'quantity' , cellRendererFramework:QuantityRendererComponent}
  ];

  rowData: any;

  modules = AllCommunityModules;


  constructor(private http: HttpClient, private dataService: DataService,private router:Router) {

  }

  ngOnInit() {

    this.http.get("http://localhost:3006/list")
      .subscribe((responseData) => {
        this.rowData = responseData['data']
      },
        error => {
          this.error = "error occured"
        })
  }

  getSelectedRows() {
    const selectedNodes = this.agGrid.api.getSelectedNodes();
    var selectedData = selectedNodes.map(node => node.data);
    this.dataService.selectedData = selectedData
     this.router.navigate(['cart'])
  }
}





