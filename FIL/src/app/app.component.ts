import { Component } from '@angular/core';
import { MediaQueryService } from './media-query.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'FIL';
  constructor(private media:MediaQueryService){
    // media.query();
  }
  ngOnInit(): void {
    this.media.query();
  }
}
