import { Component, OnInit } from '@angular/core';
import { MediaQueryService } from 'src/app/media-query.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'fil-header',
  templateUrl: './fil-header.component.html',
  styleUrls: ['./fil-header.component.scss']
})
export class FilHeaderComponent implements OnInit {

  constructor(private mq:MediaQueryService,private http:HttpClient) { }
  navBtns:[];
  isMoblie:boolean = false;
  isTablet_small:boolean = false;
  isTablet:boolean = false;
  islaptop:boolean = false;
  isdesktop:boolean = true;
  ngOnInit(): void {
    this.mq.query().subscribe(data=>{
      [this.isMoblie,
        this.isTablet_small,
        this.isTablet,
        this.islaptop,
        this.isdesktop] = [...data]
        if(this.isMoblie){
          this.http.get("./assets/data.json").subscribe(
            json=>{
              this.navBtns = json["navBtns"]
              console.table(this.navBtns)
            },
            err=>{
              console.log(err)
            }
          )
        }
    })
  }

}
