import { Component } from '@angular/core';
import { MediaQueryService } from './media-query.service';
import { HttpClient } from '@angular/common/http';
import { CommonService } from './common.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'FIL';
  constructor(private media:MediaQueryService,private http:HttpClient,private common:CommonService){
    // media.query();
  }
  tableData1;
  tableData2;
  bottomLinks;
  ngOnInit(): void {
    this.common.getAlldate().subscribe(
      data=>{
        if(data){
          this.tableData1 = data["tableData1"]
          this.tableData2 = data["tableData2"]
          this.bottomLinks = data["bottomLinks"]
        }
      }
    )
  }
}
