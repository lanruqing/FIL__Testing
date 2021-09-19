import { IconService } from 'src/app/icon.service';
import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'fil-tooltip',
  templateUrl: './fil-tooltip.component.html',
  styleUrls: ['./fil-tooltip.component.scss']
})
export class FilTooltipComponent implements OnInit {
  @Input() title:string;
  @Input() tooltips:string[];
  @Input() size:string;
  @Input() hasPop:boolean = true;
  @Input() isMobile:boolean = false;
  showTooltip:boolean = false;
  constructor(public icon:IconService) { }

  ngOnInit(): void {
  }
  show(){
    this.showTooltip = true;
  }
  close(){
    this.showTooltip = false;
  }
}
