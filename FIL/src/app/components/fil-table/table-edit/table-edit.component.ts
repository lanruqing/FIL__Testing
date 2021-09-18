import { Component, ViewEncapsulation, OnInit,Inject } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
@Component({
  selector: 'fil-table-edit',
  templateUrl: './table-edit.component.html',
  styleUrls: ['./table-edit.component.scss']
})
export class TableEditComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: {options: {}}) { }

  ngOnInit(): void {
  }

}
