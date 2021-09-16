import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class CommonService {
  allData = new BehaviorSubject(null);
  constructor(private http:HttpClient) { }
  getAlldate(){
    return this.http.get("./assets/data.json").pipe(
      map(json=>{
        this.allData.next(json);
        return json
      })
    )
  }
}
