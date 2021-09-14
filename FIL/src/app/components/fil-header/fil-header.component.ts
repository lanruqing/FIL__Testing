import { Component, OnInit } from '@angular/core';
import { MediaQueryService } from 'src/app/media-query.service';
@Component({
  selector: 'fil-header',
  templateUrl: './fil-header.component.html',
  styleUrls: ['./fil-header.component.scss']
})
export class FilHeaderComponent implements OnInit {

  constructor(private mq:MediaQueryService) { }
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
  }

}
