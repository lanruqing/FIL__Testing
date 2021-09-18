import { Component, ViewEncapsulation, OnInit,Inject } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
@Component({
  selector: 'fil-table-edit',
  templateUrl: './table-edit.component.html',
  styleUrls: ['./table-edit.component.scss']
})
export class TableEditComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: {options}) {
    data.options.forEach(option => {
      option['disabled'] = false;
    });
   }
  checkedItem:[];
  ngOnInit(): void {
  }
  checked($e,ele){
    // ele.show = $e.checked
    this.data.options.forEach(item => {
      if(item["key"] == ele["key"]){
        item['show'] = $e.checked;
      }
    });
    let checkedName:string[] = [];
    this.checkedItem = this.data.options.filter(item=>{
      if(item['show']){
        checkedName.push(item["key"])
        return true
      }
    })
    this.data.options.forEach(item=>{
      if(checkedName.length >5 && !checkedName.includes(item['key'])){
        item['disabled'] = true
      }else{
        item['disabled'] = false
      }
    })
    console.log(this.data.options)
  }
}
