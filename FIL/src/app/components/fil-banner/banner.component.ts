import { HttpClient } from '@angular/common/http';
import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { forkJoin } from 'rxjs';
import { MediaQueryService } from 'src/app/media-query.service';
@Component({
  selector: 'fil-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BannerComponent implements OnInit {
  navBtns:[];
  bannerData:{};
  constructor(private mq:MediaQueryService,private http:HttpClient) { }
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
    })
    this.http.get("./assets/data.json").subscribe(
      json=>{
        this.navBtns = json["navBtns"]
        this.bannerData = json["bannerData"]
        console.table(this.bannerData)
      },
      err=>{
        console.log(err)
      }
    )
  }
}
