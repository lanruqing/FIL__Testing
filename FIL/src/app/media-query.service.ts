import { Injectable } from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {map} from 'rxjs/operators'
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MediaQueryService {
  isMoblie:boolean = false;
  isTablet_small:boolean = false;
  isTablet:boolean = false;
  islaptop:boolean = false;
  isdesktop:boolean = true;
  device = new BehaviorSubject(null);
  constructor(private breakpointObserver: BreakpointObserver) {
  }
  query(){
    return this.breakpointObserver.observe([
      Breakpoints.Handset,
      Breakpoints.Tablet,
      Breakpoints.Web
    ]).pipe(
      map(
        res=>{
          const queryResult = Object.values(res.breakpoints);
          [this.isMoblie,
            this.isTablet_small,
            this.isTablet,
            this.islaptop,
            this.isdesktop] = [...queryResult]
          console.log(res.breakpoints)
          return [...queryResult]
        }
      )
    )
  }
}

