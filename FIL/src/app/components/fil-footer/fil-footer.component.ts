import { IconService } from 'src/app/icon.service';
import { Component, OnInit,Output,EventEmitter } from '@angular/core';
@Component({
  selector: 'fil-footer',
  templateUrl: './fil-footer.component.html',
  styleUrls: ['./fil-footer.component.scss']
})
export class FilFooterComponent implements OnInit {

  declare window:Window;
  constructor(public icon:IconService) { }
  @Output() toTop = new EventEmitter
  ngOnInit(): void {
  }
  backTop(){
    document.body.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
}
