import { Component, ViewEncapsulation, OnInit,Inject } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { checkBox } from 'src/app/modal';
@Component({
  selector: 'fil-table-edit',
  templateUrl: './table-edit.component.html',
  styleUrls: ['./table-edit.component.scss']
})
export class TableEditComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: {options:checkBox[]}) {
    this.options = JSON.parse(JSON.stringify(data.options));
    this.options.forEach(option => {
      option['disabled'] = false;
    });
    this.checkedItem = this.options.filter(item=>{
      return item['show']
    })
   }
  checkedItem;
  options:[checkBox]
  ngOnInit(): void {    
    this.checkedItem = this.options.filter(item=>{
      return item['show']
    })
  }
  checked($e,ele){
    // ele.show = $e.checked
    this.options.forEach(item => {
      if(item["key"] == ele["key"]){
        item['show'] = $e.checked;
      }
    });
    let checkedName:string[] = [];
    this.checkedItem = this.options.filter(item=>{
      if(item['show']){
        checkedName.push(item["key"])
        return true
      }
    })
    this.options.forEach(item=>{
      if(checkedName.length >5 && !checkedName.includes(item['key'])){
        item['disabled'] = true
      }else{
        item['disabled'] = false
      }
    })
    console.log(this.options)
  }
}
