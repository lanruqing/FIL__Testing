import { Component, OnInit,Input,SimpleChanges } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MediaQueryService } from 'src/app/media-query.service';

@Component({
  selector: 'fil-table',
  templateUrl: './fil-table.component.html',
  styleUrls: ['./fil-table.component.scss']
})
export class FilTableComponent implements OnInit {
  @Input() tableTitle:string;
  @Input() tableData;
  isMoblie:boolean = false;
  isTablet_small:boolean = false;
  isTablet:boolean = false;
  islaptop:boolean = false;
  isdesktop:boolean = true;
  constructor(private http:HttpClient,private mq:MediaQueryService) { }

  ngOnInit(): void {
    this.tableData = {};
    this.mq.query().subscribe(data=>{
      [this.isMoblie,
        this.isTablet_small,
        this.isTablet,
        this.islaptop,
        this.isdesktop] = [...data]
    })    
  }
  ngOnChanges(changes: SimpleChanges): void {
    for (const change in changes) {
      if(change == "tableData"){
        
      }
    }
    
  }

}
